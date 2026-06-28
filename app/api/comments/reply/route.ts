import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const currentUserId = "mock-current-user-id";
    const { content, parentId } = await request.json();

    if (!content || !parentId) {
      return NextResponse.json({ error: "Missing metadata" }, { status: 400 });
    }

    const parentComment = await prisma.comment.findUnique({ where: { id: parentId } });
    if (!parentComment) {
      return NextResponse.json({ error: "Parent comment not found" }, { status: 404 });
    }

    const newReply = await prisma.comment.create({
      data: {
        content,
        parentId,
        postId: parentComment.postId,
        userId: currentUserId
      }
    });

    return NextResponse.json(newReply, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add reply" }, { status: 500 });
  }
}