import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ postId: string }> }
) {
  try {
    const { postId } = await context.params;

    const [count, lastComment] = await prisma.$transaction([
      prisma.comment.count({ where: { postId } }),
      prisma.comment.findFirst({
        where: { postId },
        orderBy: { createdAt: "desc" },
        include: {
          user: { select: { firstName: true, lastName: true } }
        }
      })
    ]);

    return NextResponse.json({ count, lastComment });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch comment summary" },
      { status: 500 }
    );
  }
}