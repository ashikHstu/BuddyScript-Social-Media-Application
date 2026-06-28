import Image from "next/image";
import { redirect } from "next/navigation";
import DecissionPage from "./components/DecissionPage";
export default function Home() {
  
  redirect("/login");
}
