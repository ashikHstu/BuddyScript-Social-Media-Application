import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const currentUserId = session.user.id;

    const { postId, commentId } = await request.json();

    if ((postId && commentId) || (!postId && !commentId)) {
      return NextResponse.json(
        { error: "Provide either postId OR commentId." },
        { status: 400 }
      );
    }

    // 🔹 POST LIKE
    if (postId) {
      const existingLike = await prisma.like.findUnique({
        where: {
          userId_postId: { userId: currentUserId, postId },
        },
      });

      if (existingLike) {
        await prisma.like.delete({ where: { id: existingLike.id } });
        return NextResponse.json({ liked: false });
      } else {
        await prisma.like.create({
          data: { userId: currentUserId, postId },
        });
        return NextResponse.json({ liked: true });
      }
    }

    // 🔹 COMMENT LIKE
    if (commentId) {
      const existingLike = await prisma.like.findUnique({
        where: {
          userId_commentId: { userId: currentUserId, commentId },
        },
      });

      if (existingLike) {
        await prisma.like.delete({ where: { id: existingLike.id } });
        return NextResponse.json({ liked: false });
      } else {
        await prisma.like.create({
          data: { userId: currentUserId, commentId },
        });
        return NextResponse.json({ liked: true });
      }
    }

    return NextResponse.json({ error: "Invalid request" }, { status: 400 });

  } catch (error) {
    return NextResponse.json(
      { error: "Failed to toggle like" },
      { status: 500 }
    );
  }
}