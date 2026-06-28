'use client';
import YouMightLikeItem from './YouMightLikeItem';
import FriendsSidebar from './FriendsSidebar';

export default function RightColumn() {
  return (
    <aside className="_layout_right_sidebar_wrap">
       <YouMightLikeItem/>
       <FriendsSidebar/>
    </aside>
  );
}
