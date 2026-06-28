import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { commentId: string } }
) {
  try {
    const replies = await prisma.comment.findMany({
      where: { parentId: params.commentId },
      orderBy: { createdAt: "asc" },
      include: { user: { select: { firstName: true, lastName: true } } }
    });
    return NextResponse.json(replies);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch replies" }, { status: 500 });
  }
}