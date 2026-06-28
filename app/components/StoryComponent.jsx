'use client';
import React from 'react';
import Image from 'next/image';
const StoryComponent = () => {
    return (
                <div className="_feed_inner_ppl_card _mar_b16">
          <div className="_feed_inner_story_arrow">
            <button type="button" className="_feed_inner_story_arrow_btn">‹</button>
          </div>

          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col">
              <div className="_feed_inner_profile_story _b_radious6">
                <div className="_feed_inner_profile_story_image">
                  <Image src="/assets/images/card_ppl1.png" alt="Your Story" width={160} height={160} />
                  <div className="_feed_inner_story_txt">
                    <div className="_feed_inner_story_btn">
                      <button className="_feed_inner_story_btn_link">+</button>
                    </div>
                    <p className="_feed_inner_story_para">Your Story</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col">
              <div className="_feed_inner_public_story _b_radious6">
                <div className="_feed_inner_public_story_image">
                  <Image src="/assets/images/card_ppl2.png" alt="Story" width={160} height={160} />
                  <div className="_feed_inner_pulic_story_txt">
                    <p className="_feed_inner_pulic_story_para">Ryan Roslansky</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default StoryComponent;