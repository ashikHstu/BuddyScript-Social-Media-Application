'use client';
import YouMightLikeItem from './YouMightLikeItem';
import FriendsSidebar from './FriendsSidebar';

export default function RightColumn() {
  return (
    <aside className="_layout_right_sidebar_wrap">
       <YouMightLikeItem/>
       <FriendsSidebar/>
      {/* <div className="_right_inner_area_friends _padd_t24 _padd_b6 _padd_r24 _padd_l24 _b_radious6 _feed_inner_area" style={{ marginTop: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h4 className="_title5">Your friends</h4>
          <Link href="/friends" className="_see_all">See all</Link>
        </div>

        <ul className="_friends_list" style={{ marginTop: 12 }}>
          <li className="_friend_item" style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
            <Image src="/assets/images/people1.png" alt="Steve Jobs" width={40} height={40} />
            <div>
              <Link href="/profile" className=""><strong>Steve Jobs</strong></Link>
              <div className="_friend_meta">CEO of Apple</div>
            </div>
          </li>

          <li className="_friend_item" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Image src="/assets/images/people3.png" alt="Dylan Field" width={40} height={40} />
            <div>
              <Link href="/profile" className=""><strong>Dylan Field</strong></Link>
              <div className="_friend_meta">CEO of Figma</div>
            </div>
          </li>
        </ul>
      </div> */}
    </aside>
  );
}
