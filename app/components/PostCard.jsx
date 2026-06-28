"use client";

import { useEffect, useState } from "react";
import LikeButton from './LikeButton';

export default function PostCard({ post, session }) {
  const [likeCount, setLikeCount] = useState(0);
  const [commentSummary, setCommentSummary] = useState(null);

  useEffect(() => {
    // Like count
    fetch(`/api/posts/${post.id}/likes/count`)
      .then(res => res.json())
      .then(data => setLikeCount(data.count));

    // Comment summary (last comment + count)
    fetch(`/api/posts/${post.id}/comments/summary`)
      .then(res => res.json())
      .then(setCommentSummary);
  }, [post.id]);

  const userName =
    post.user?.firstName + " " + post.user?.lastName || "User";

  const timeAgo = new Date(post.createdAt).toLocaleString();

  const commentCount = commentSummary?.count || 0;
  const lastComment = commentSummary?.lastComment;

  return (
    <div className="_feed_inner_timeline_post_area _b_radious6 _padd_b24 _padd_t24 _mar_b16">

      <div className="_feed_inner_timeline_content _padd_r24 _padd_l24">

        {/* TOP */}
        <div className="_feed_inner_timeline_post_top">
          <div className="_feed_inner_timeline_post_box">

            {/*img */}
            <div className="_feed_inner_timeline_post_box_image">
              <div className="_post_img">👤</div>
            </div>

            <div className="_feed_inner_timeline_post_box_txt">
              <h4 className="_feed_inner_timeline_post_box_title">
                {userName}
              </h4>

              <p className="_feed_inner_timeline_post_box_para">
                {timeAgo}
                {" "}
                <a href="#0">
                  {post.isPublic ? "Public" : "Private"}
                </a>
              </p>
            </div>

          </div>
        </div>

        {/* CONTENT */}
        <h4 className="_feed_inner_timeline_post_title">
          {post.content}
        </h4>

        {/* IMAGE PLACEHOLDER */
        console.log("post image log[arblob]:")

        }
        {<img src={post.imageUrl}/> && <img src={post.imageUrl}/> }

      </div>

      {/* REACTIONS */}
      <div className="_feed_inner_timeline_total_reacts _padd_r24 _padd_l24 _mar_b26">

        <div className="_feed_inner_timeline_total_reacts_image">
          <p className="_feed_inner_timeline_total_reacts_para">
            {likeCount}
          </p>
        </div>

        <div className="_feed_inner_timeline_total_reacts_txt">
          <p className="_feed_inner_timeline_total_reacts_para1">
            <a href="#0">
              <span>{commentCount}</span>{" "}
              {commentCount > 1 ? "Comments" : "Comment"}
            </a>
          </p>

          <p className="_feed_inner_timeline_total_reacts_para2">
            <span>12</span> Share
          </p>
        </div>

      </div>

      {/* ACTION BUTTONS */}
      <div className="_feed_inner_timeline_reaction">

        <LikeButton post={post.id}/>

        <button className="_feed_inner_timeline_reaction_comment _feed_reaction">
          <span className="_feed_inner_timeline_reaction_link">
            💬 Comment
          </span>
        </button>

        <button className="_feed_inner_timeline_reaction_share _feed_reaction">
          <span className="_feed_inner_timeline_reaction_link">
            🔁 Share
          </span>
        </button>

      </div>

      {/* COMMENT BOX */}
      <div className="_feed_inner_timeline_cooment_area">
        <div className="_feed_inner_comment_box">
          <form className="_feed_inner_comment_box_form">

            <div className="_feed_inner_comment_box_content">

              <div className="_feed_inner_comment_box_content_image">
                <div className="_comment_img">👤</div>
              </div>

              <div className="_feed_inner_comment_box_content_txt">
                <textarea
                  className="form-control _comment_textarea"
                  placeholder="Write a comment"
                />
              </div>

            </div>

          </form>
        </div>
      </div>

      {/* COMMENTS */}
      <div className="_timline_comment_main">

        {commentCount > 1 && (
          <div className="_previous_comment">
            <button type="button" className="_previous_comment_txt">
              View {commentCount - 1} previous comments
            </button>
          </div>
        )}

        {lastComment && (
          <div className="_comment_main">

            <div className="_comment_image">
              <div className="_comment_img1">👤</div>
            </div>

            <div className="_comment_area">

              <div className="_comment_details">

                <div className="_comment_details_top">
                  <div className="_comment_name">
                    <h4 className="_comment_name_title">
                      {lastComment.user?.firstName}{" "}
                      {lastComment.user?.lastName}
                    </h4>
                  </div>
                </div>

                <div className="_comment_status">
                  <p className="_comment_status_text">
                    <span>{lastComment.content}</span>
                  </p>
                </div>

                <div className="_total_reactions">
                  <span className="_total">
                    {lastComment.likes?.length || 0}
                  </span>
                </div>

                <div className="_comment_reply">
                  <ul className="_comment_reply_list">
                    <li><span>Like.</span></li>
                    <li><span>Reply.</span></li>
                    <li>
                      <span className="_time_link">
                        {new Date(lastComment.createdAt).toLocaleString()}
                      </span>
                    </li>
                  </ul>
                </div>

              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}