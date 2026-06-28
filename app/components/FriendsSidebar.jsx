"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FriendsSidebar = () => {
  return (
    <div className="_layout_right_sidebar_inner">
      <div className="_feed_right_inner_area_card _padd_t24 _padd_b6 _padd_r24 _padd_l24 _b_radious6 _feed_inner_area">
        <div className="_feed_top_fixed">
          <div className="_feed_right_inner_area_card_content _mar_b24">
            <h4 className="_feed_right_inner_area_card_content_title _title5">Your Friends</h4>
            <span className="_feed_right_inner_area_card_content_txt">
              <Link className="_feed_right_inner_area_card_content_txt_link" href="/feed/find-friends">
                See All
              </Link>
            </span>
          </div>
          <form className="_feed_right_inner_area_card_form">
            <svg className="_feed_right_inner_area_card_form_svg" xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17">
              <circle cx="7" cy="7" r="6" stroke="#666"></circle>
              <path stroke="#666" strokeLinecap="round" d="M16 16l-3-3"></path>
            </svg>
            <input className="form-control me-2 _feed_right_inner_area_card_form_inpt" type="search" placeholder="Search friends..." aria-label="Search" />
          </form>
        </div>

        <div className="_feed_bottom_fixed">
          <div className="_feed_right_inner_area_card_ppl _feed_right_inner_area_card_ppl_inactive">
            <div className="_feed_right_inner_area_card_ppl_box">
              <div className="_feed_right_inner_area_card_ppl_image">
                <Link href="/feed/profile">
                  <Image 
                    src="/assets/images/people1.png" 
                    alt="Steve Jobs" 
                    width={40} 
                    height={40} 
                    className="_box_ppl_img"
                    style={{ width: '100%', height: 'auto' }} 
                  />
                </Link>
              </div>
              <div className="_feed_right_inner_area_card_ppl_txt">
                <Link href="/feed/profile">
                  <h4 className="_feed_right_inner_area_card_ppl_title">Steve Jobs</h4>
                </Link>
                <p className="_feed_right_inner_area_card_ppl_para">CEO of Apple</p>
              </div>
            </div>
            <div className="_feed_right_inner_area_card_ppl_side">
              <span>5m ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsSidebar;