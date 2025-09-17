import Image from "next/image";
import AdminSidebar from "./sharedComponents/Sidebar/AdminSidebar";
import AgrovetSidebar from "./sharedComponents/Sidebar/AgrovetSidebar";

export default function Home() {
  return (
    <div>
      <AdminSidebar/>
      <AgrovetSidebar/>
    </div>
  );
}
