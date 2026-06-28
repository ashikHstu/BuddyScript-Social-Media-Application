import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ postId: string }> }
) {
  try {
    const { postId } = await context.params;

    const count = await prisma.like.count({
      where: { postId }
    });

    return NextResponse.json({ count });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get like count" },
      { status: 500 }
    );
  }
}