import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      user: true,
      _count: {
        select: {
          comments: true,
          likes: true,
        },
      },
    },
  });

  return NextResponse.json(posts);
}