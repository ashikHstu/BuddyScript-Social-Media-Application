"use client";

import { useState } from "react";

export default function CommentBox({ postId }) {
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    if (!text) return;

    await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ postId, content: text })
    });

    setText("");
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a comment"
      />
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
}