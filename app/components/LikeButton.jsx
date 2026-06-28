"use client";
import { useEffect, useState } from "react";

export default function LikeButton({ postId }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`/api/posts/${postId}/likes/count`)
      .then(res => res.json())
      .then(data => setCount(data.count));
  }, [postId]);

  const handleLike = async () => {
    const res = await fetch("/api/likes/toggle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ postId }),
    });

    const data = await res.json();

    setCount(prev => {
  if (data.liked) return prev + 1;
  return Math.max(prev - 1, 0);
});
  };

  return (
    <button onClick={handleLike}>
      👍 Like ({count})
    </button>
  );
}