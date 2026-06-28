"use client";

import { useEffect, useState } from "react";
import CommentItem from "./CommentItem";

export default function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`/api/posts/${postId}/comments`)
      .then(res => res.json())
      .then(setComments);
  }, [postId]);

  return (
    <div>
      {comments.map(c => (
        <CommentItem key={c.id} comment={c} />
      ))}
    </div>
  );
}