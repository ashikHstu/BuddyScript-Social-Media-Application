'use client';

import StoryComponent from './StoryComponent';
import CreatePost from './CreatePost';
import PostCard from './PostCard';
import { useEffect, useState } from "react";

export default function MiddleColumn({session, extraChildren = null }) {
   const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then(res => res.json())
      .then(setPosts);
  }, []);
const handleNewPost = (newPost) => {
    // Take current posts and add the new one to the TOP of the array
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };
  return (
    <main className="_layout_middle_wrap">
      <div className="_layout_middle_inner">
        {/* Stories area */}
        <StoryComponent/>
        <CreatePost onPostCreated={handleNewPost}/>
            <div className="_feed_container">
      {posts.map(post => (
        <PostCard key={post.id} post={post} session={session} />
      ))}
    </div>
      </div>
    </main>
  );
}
