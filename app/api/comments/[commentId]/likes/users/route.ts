import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { commentId: string } }
) {
  try {
    const likes = await prisma.like.findMany({
      where: { 
        commentId: params.commentId,
        comment: { parentId: null } 
      },
      select: {
        user: { select: { id: true, firstName: true, lastName: true, email: true } }
      }
    });

    return NextResponse.json(likes.map(like => like.user));
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch comment likes" }, { status: 500 });
  }
}