import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { replyId: string } }
) {
  try {
    const likes = await prisma.like.findMany({
      where: { 
        commentId: params.replyId,
        comment: { NOT: { parentId: null } } 
      },
      select: {
        comment: { select: { id: true, content: true, parentId: true } },
        user: { select: { id: true, firstName: true, lastName: true, email: true } }
      }
    });

    const result = likes.map(like => ({
      replyId: like.comment?.id,
      replyContent: like.comment?.content,
      parentCommentId: like.comment?.parentId,
      likedByUser: like.user
    }));

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch reply likes" }, { status: 500 });
  }
}