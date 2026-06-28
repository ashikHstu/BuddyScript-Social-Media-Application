import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { commentId: string } }
) {
  try {
    const commentId = params.commentId;

    const [count, lastReply] = await prisma.$transaction([
      prisma.comment.count({ where: { parentId: commentId } }),
      prisma.comment.findFirst({
        where: { parentId: commentId },
        orderBy: { createdAt: "desc" },
        include: { user: { select: { firstName: true, lastName: true } } }
      })
    ]);

    return NextResponse.json({ count, lastReply });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch reply summary" }, { status: 500 });
  }
}