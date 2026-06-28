import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { postId: string } }
) {
  try {
    const comments = await prisma.comment.findMany({
      where: { 
        postId: params.postId,
        parentId: null 
      },
      orderBy: { createdAt: "asc" },
      include: { user: { select: { firstName: true, lastName: true } } }
    });
    return NextResponse.json(comments);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch comments for this post" }, { status: 500 });
  }
}