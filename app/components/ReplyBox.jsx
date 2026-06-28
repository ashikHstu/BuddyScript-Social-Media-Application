"use client";

import { useState } from "react";

export default function ReplyBox({ parentId }) {
  const [text, setText] = useState("");

  const handleReply = async () => {
    if (!text) return;

    await fetch("/api/comments/reply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        parentId,
        content: text
      })
    });

    setText("");
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Reply..."
      />
      <button onClick={handleReply}>Reply</button>
    </div>
  );
}