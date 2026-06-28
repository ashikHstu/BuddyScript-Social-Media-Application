"use client";

import { useEffect, useState } from "react";
import ReplyList from "./ReplyList";
import ReplyBox from "./ReplyBox";

export default function CommentItem({ comment }) {
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    fetch(`/api/comments/${comment.id}/likes/users`)
      .then(res => res.json())
      .then(setLikes);
  }, [comment.id]);

  return (
    <div style={{ marginLeft: "20px" }}>
      <p>{comment.content}</p>

      <div>👍 {likes.length}</div>

      <ReplyBox parentId={comment.id} />

      <ReplyList commentId={comment.id} />
    </div>
  );
}