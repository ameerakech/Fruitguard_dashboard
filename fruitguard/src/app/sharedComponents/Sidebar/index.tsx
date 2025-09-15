"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  HomeIcon,
  UserIcon,
  ChartBarIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: HomeIcon, href: "/" },
    { id: "data", label: "Data monitoring", icon: ChartBarIcon, href: "/data" },
    { id: "profile", label: "Profile", icon: UserIcon, href: "/profile" },
  ];

  return (
    <aside className="flex flex-col bg-[#683929] w-80 p-6 min-h-screen text-gray-100 text-[20px]">
      <div className="flex flex-col items-center mb-10">
        <div className="w-30 h-12 mt-10 rounded-full flex items-center justify-center mb-3">
          <Image
            src="/images/fruitguard.png"
            alt="FruitGuard logo"
            width={800}
            height={200}
            priority={true}
          />
        </div>
        <h1 className="text-[25px] font-semibold mt-5 mb-4 text-[#FFC661]">
          FruitGuard
        </h1>
      </div>

      <nav className="flex flex-col space-y-25 mb-28 justify-start mt-10">
        {navItems.map(({ id, label, icon: Icon, href }) => {
          const isActive = active === id;

          return (
            <Link
              key={id}
              href={href}
              onClick={() => setActive(id)}
              className={`flex items-center gap-3 font-semibold border-b border-gray-400 pb-8 w-[85%]
                hover:text-[#FFC661] transition-colors duration-200 font-family: var(--font-nunito), sans-serif;
                scroll-behavior: smooth; ${isActive ? "text-[#FFC661]" : "text-white"}`}
            >
              <span
                className={`p-1 rounded-full border transition-colors duration-200 ${
                  isActive ? "border-[#faba28] text-[#FFC661]" : "border-white text-white"
                }`}
              >
                <Icon className="w-10 h-10" />
              </span>
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      <button
        className="flex items-center text-[20px] flex-grow gap-3 font-bold text-white hover:text-[#FFC661] transition-colors duration-200"
      >
        <ArrowLeftOnRectangleIcon className="w-10 h-10" />
        Log out
      </button>
    </aside>
  );
}