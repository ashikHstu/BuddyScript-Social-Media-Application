import React from 'react';
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react"; 
import LoadingPage from "./LoadingPage";
const DecissionPage = () => {
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
  else
  redirect("/feed");
    return (
        <div>
            
        </div>
    );
};

export default DecissionPage;