import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { postId: string } }
) {
  try {
    const likes = await prisma.like.findMany({
      where: { postId: params.postId },
      select: {
        user: { select: { firstName: true, lastName: true } }
      }
    });

    const userNames = likes.map(like => `${like.user.firstName || ""} ${like.user.lastName || ""}`.trim());
    return NextResponse.json(userNames);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch usernames" }, { status: 500 });
  }
}