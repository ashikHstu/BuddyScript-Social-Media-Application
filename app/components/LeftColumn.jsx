'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LeftColumn() {
  return (
    <aside className="_layout_left_sidebar_wrap">
      {/* Explore */}
      <div className="_left_inner_area_explore _padd_t24 _padd_b6 _padd_r24 _padd_l24 _b_radious6 _feed_inner_area">
        <h4 className="_left_inner_area_explore_title _title5 _mar_b24">Explore</h4>

        <ul className="_left_inner_area_explore_list">
          <li className="_left_inner_area_explore_item _explore_item">
            <a className="_left_inner_area_explore_link" href="#0">Learning</a>
            <span className="_left_inner_area_explore_link_txt">New</span>
          </li>

          <li className="_left_inner_area_explore_item">
            <a className="_left_inner_area_explore_link" href="#0">Insights</a>
          </li>

          <li className="_left_inner_area_explore_item">
            <Link href="/find-friends" className="_left_inner_area_explore_link">Find friends</Link>
          </li>

          <li className="_left_inner_area_explore_item">
            <a className="_left_inner_area_explore_link" href="#0">Bookmarks</a>
          </li>

          <li className="_left_inner_area_explore_item">
            <Link href="/group" className="_left_inner_area_explore_link">Group</Link>
          </li>

          <li className="_left_inner_area_explore_item _explore_item">
            <a className="_left_inner_area_explore_link" href="#0">Gaming</a>
            <span className="_left_inner_area_explore_link_txt">New</span>
          </li>

          <li className="_left_inner_area_explore_item">
            <a className="_left_inner_area_explore_link" href="#0">Settings</a>
          </li>

          <li className="_left_inner_area_explore_item">
            <a className="_left_inner_area_explore_link" href="#0">Save post</a>
          </li>
        </ul>
      </div>

      {/* Suggested People */}
      <div className="_left_inner_area_suggest _padd_t24 _padd_b6 _padd_r24 _padd_l24 _b_radious6 _feed_inner_area" style={{ marginTop: 16 }}>
        <div className="_left_inner_area_suggest_content _mar_b24">
          <h4 className="_left_inner_area_suggest_content_title _title5">Suggested People</h4>
          <span className="_left_inner_area_suggest_content_txt">
            <a className="_left_inner_area_suggest_content_txt_link" href="#0">See All</a>
          </span>
        </div>

        <div className="_left_inner_area_suggest_info">
          <div className="_left_inner_area_suggest_info_box">
            <div className="_left_inner_area_suggest_info_image">
              <Link href="/feed" className="">
                <Image src="/assets/images/people1.png" alt="Steve Jobs" width={48} height={48} />
              </Link>
            </div>
            <div className="_left_inner_area_suggest_info_txt">
              <Link href="/feed" className="">
                <h4 className="_left_inner_area_suggest_info_title">Steve Jobs</h4>
              </Link>
              <p className="_left_inner_area_suggest_info_para">CEO of Apple</p>
            </div>
          </div>
          <div className="_left_inner_area_suggest_info_link">
            <a href="#0" className="_info_link">Connect</a>
          </div>
        </div>

        <div className="_left_inner_area_suggest_info">
          <div className="_left_inner_area_suggest_info_box">
            <div className="_left_inner_area_suggest_info_image">
              <Link href="/feed" className="">
                <Image src="/assets/images/people2.png" alt="Ryan Roslansky" width={48} height={48} />
              </Link>
            </div>
            <div className="_left_inner_area_suggest_info_txt">
              <Link href="/feed" className="">
                <h4 className="_left_inner_area_suggest_info_title">Ryan Roslansky</h4>
              </Link>
              <p className="_left_inner_area_suggest_info_para">CEO of Linkedin</p>
            </div>
          </div>
          <div className="_left_inner_area_suggest_info_link">
            <a href="#0" className="_info_link">Connect</a>
          </div>
        </div>

        <div className="_left_inner_area_suggest_info">
          <div className="_left_inner_area_suggest_info_box">
            <div className="_left_inner_area_suggest_info_image">
              <Link href="/feed" className="">
                <Image src="/assets/images/people3.png" alt="Dylan Field" width={48} height={48} />
              </Link>
            </div>
            <div className="_left_inner_area_suggest_info_txt">
              <Link href="/profile" className="">
                <h4 className="_left_inner_area_suggest_info_title">Dylan Field</h4>
              </Link>
              <p className="_left_inner_area_suggest_info_para">CEO of Figma</p>
            </div>
          </div>
          <div className="_left_inner_area_suggest_info_link">
            <a href="#0" className="_info_link">Connect</a>
          </div>
        </div>
      </div>

      {/* Events */}
      <div className="_left_inner_area_event _padd_t24 _padd_b6 _padd_r24 _padd_l24 _b_radious6 _feed_inner_area" style={{ marginTop: 16 }}>
        <div className="_left_inner_event_content">
          <h4 className="_left_inner_event_title _title5">Events</h4>
          <Link href="/event" className="_left_inner_event_link">See all</Link>
        </div>

        {/* Link wraps the whole card; inner "Going" is a button to avoid nested anchors */}
        <Link href="/event-single" className="_left_inner_event_card_link">
          <div className="_left_inner_event_card">
            <div className="_left_inner_event_card_iamge">
              <Image src="/assets/images/feed_event1.png" alt="Event" width={120} height={80} />
            </div>

            <div className="_left_inner_event_card_content">
              <div className="_left_inner_card_date">
                <p className="_left_inner_card_date_para">10</p>
                <p className="_left_inner_card_date_para1">Jul</p>
              </div>
              <div className="_left_inner_card_txt">
                <h4 className="_left_inner_event_card_title">No more terrorism no more cry</h4>
              </div>
            </div>

            <hr className="_underline" />

            <div className="_left_inner_event_bottom">
              <p className="_left_iner_event_bottom">17 People Going</p>

              {/* changed from <a> to <button> to avoid nested anchors */}
              <button type="button" className="_left_iner_event_bottom_link">Going</button>
            </div>
          </div>
        </Link>
      </div>
    </aside>
  );
}
