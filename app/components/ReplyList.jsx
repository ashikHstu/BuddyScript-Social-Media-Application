"use client";

import { useEffect, useState } from "react";

export default function ReplyList({ commentId }) {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    fetch(`/api/comments/${commentId}/replies`)
      .then(res => res.json())
      .then(setReplies);
  }, [commentId]);

  return (
    <div style={{ marginLeft: "40px" }}>
      {replies.map(r => (
        <p key={r.id}>↳ {r.content}</p>
      ))}
    </div>
  );
}