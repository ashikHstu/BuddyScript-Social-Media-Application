"use client";

// import React, { useState } from 'react';
// import ThemeToggler from '../components/ThemeToggler';
import Navbar from '../components/Navbar';
import { redirect } from "next/navigation";

// import ThemeToggle from './../components/ThemeToggle';
import LeftColumn from './../components/LeftColumn';
import MiddleColumn from './../components/MiddleColumn';
import RightColumn from './../components/RightColumn';
import { useSession } from "next-auth/react"; 
import LoadingPage from './../components/LoadingPage';

export default function App() {
  // const [isDarkMode, setIsDarkMode] = useState(false);
// const currentUser = { name: "Ashik Rahman" };
const { data: session, status } = useSession();

if(status==="loading")
{
  return (
    <div> <LoadingPage/></div>
  );
}
else if(status=="unauthenticated")
{
  redirect("/login");
}
const headerOffset = 120;

  return (
    <div >
      {/* Switching Toggle Button Component */}
      {/* <ThemeToggle/> */}
      {/* <ThemeToggler isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} /> */}
      
      <div className="_main_layout">
        {/* Navigation Bar Header */}
        <Navbar userName={session.user.name}/>

<div className="container _custom_container" style={{ paddingTop: 16 }}>
  <div className="_layout_inner_wrap">
    {/* 1. Added 'flexWrap: "nowrap"' to prevent the 3rd column from dropping.
      2. Added 'alignItems: "flex-start"' to ensure heights stay consistent.
    */}
    <div className="row" style={{ gap: 16, display: 'flex', flexWrap: 'nowrap' }}>
      
      {/* Left Column */}
      <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12" style={{ flex: '0 0 calc(25% - 12px)' }}>
        <div style={{ height: `calc(100vh - ${headerOffset || 0}px)`, overflow: 'auto', paddingRight: 5 }}>
          <LeftColumn />
        </div>
      </div>

      {/* Middle Column */}
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" style={{ flex: '0 0 calc(50% - 12px)' }}>
        <div style={{ height: `calc(100vh - ${headerOffset || 0}px)`, overflow: 'auto', paddingRight: 5 }}>
          <MiddleColumn session={session}/>
        </div>
      </div>

      {/* Right Column */}
      <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12" style={{ flex: '0 0 calc(25% - 12px)' }}>
        <div style={{ height: `calc(100vh - ${headerOffset || 0}px)`, overflow: 'auto' }}>
          <RightColumn />
        </div>
      </div>
      
    </div>
  </div>
</div>

        {/* Core Layout Content Structure Grid
        <div className="container _custom_container _mar_t32">
          <div className="row">
            <LeftSidebar />
            <MainFeed />
            <RightSidebar />
          </div>
        </div> */}

      </div>
    </div>
  );
}