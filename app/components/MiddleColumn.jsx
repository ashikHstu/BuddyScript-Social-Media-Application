'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
        {/* Composer */}
        {/* <div className="_feed_inner_text_area _b_radious6 _padd_b24 _padd_t24 _padd_r24 _padd_l24 _mar_b16">
          <div className="_feed_inner_text_area_box" style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <div className="_feed_inner_text_area_box_image">
              <Image src="/assets/images/txt_img.png" alt="Write" width={48} height={48} />
            </div>

            <div className="form-floating _feed_inner_text_area_box_form" style={{ flex: 1 }}>
              <textarea className="form-control _textarea" placeholder="Leave a comment here" id="floatingTextarea" />
              <label className="_feed_textarea_label" htmlFor="floatingTextarea">Write something ...</label>
            </div>
          </div>

          <div className="_feed_inner_text_area_bottom" style={{ marginTop: 12 }}>
            <div className="_feed_inner_text_area_item" style={{ display: 'flex', gap: 8 }}>
              <button className="_feed_inner_text_area_bottom_photo_link">Photo</button>
              <button className="_feed_inner_text_area_bottom_photo_link">Video</button>
              <button className="_feed_inner_text_area_bottom_photo_link">Event</button>
            </div>
          </div>
        </div> */}

        {/* Posts */}
        {/* <section>
          {posts.map((post) => (
            <article key={post.id} className="_post_card _b_radious6 _padd24 _mar_b16">
              <header className="_post_header" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Image src={post.avatar} alt={post.author} width={48} height={48} />
                <div>
                  <h4 className="_post_author">{post.author}</h4>
                  <div className="_post_meta">{post.role} · {post.time}</div>
                </div>
              </header>

              <div className="_post_body" style={{ marginTop: 12 }}>
                <p>{post.content}</p>
                {post.media && (
                  <div style={{ marginTop: 12 }}>
                    <Image src={post.media} alt="Post media" width={800} height={420} />
                  </div>
                )}
              </div>

              <footer className="_post_footer" style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <button className="_post_action">Like ({post.likes})</button>
                  <button className="_post_action" style={{ marginLeft: 8 }}>Comment ({post.comments})</button>
                </div>
                <div>
                  <Link href={`/post/${post.id}`} className="_post_view_link">View</Link>
                </div>
              </footer>
            </article>
          ))}
        </section>

        {extraChildren} */}
      </div>
    </main>
  );
}
