import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import path from "path";
import fs from "fs";

export async function POST(req: NextRequest) {
  try {

        const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();

    const content = formData.get("content") as string;
        const isPublic = formData.get("isPublic") === "true";
    const file = formData.get("image") as File | null;

    let imageUrl: string | null = null;

    // 🖼️ Handle image upload
    if (file && file.size > 0) {
      // Need to add the image url link later, when the image will be on cloud
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = `${Date.now()}-${file.name}`;
      const filePath = path.join(process.cwd(), "public/uploads", fileName);

      fs.writeFileSync(filePath, buffer);

      imageUrl = `/uploads/${fileName}`;
    }

    // Replace with real auth later
    const userId = session.user.id;

    const post = await prisma.post.create({
      data: {
        content,
        imageUrl,
        isPublic,
        userId,
      },
      include: {
        user: true,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Post failed" }, { status: 500 });
  }
}



export async function GET(request: NextRequest) {
  try {
     const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const currentUserId = session.user.id; 

    const posts = await prisma.post.findMany({
      where: {
        OR: [
          { isPublic: true },
          { userId: currentUserId }
        ]
      },
      orderBy: { createdAt: "desc" },
      include: { user: { select: { firstName: true, lastName: true } } }
    });

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

// export async function GET() {
//   try {
//     const currentUser = await getCurrentUser();

//     const posts = await prisma.post.findMany({
//       orderBy: {
//         createdAt: "desc",
//       },
//       include: {
//         user: true,
//         likes: true,
//         comments: {
//           where: { parentId: null },
//           include: {
//             user: true,
//             likes: true,
//             replies: {
//               include: {
//                 user: true,
//                 likes: true,
//               },
//             },
//           },
//         },
//       },
//     });

//     const postsWithMeta = posts.map((post) => ({
//       ...post,
//       likedByCurrentUser: post.likes.some(
//         (like) => like.userId === currentUser?.id
//       ),
//     }));

//     return NextResponse.json(postsWithMeta);
//   } catch (error) {
//     return new NextResponse("Error fetching posts", { status: 500 });
//   }
// }