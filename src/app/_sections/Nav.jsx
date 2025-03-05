import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Menu } from "lucide-react";
import SideBar from "./SideBar";
import { navLinks } from "@/assets/data";
export default function Nav() {
  return (
    <section className="flex justify-between py-6 px-4  border-b-2 z-50 bg-background  sticky top-0">
      <div className="flex justify-center items-center gap-2">
        <SideBar aschild>
          <button aria-label="open navbar links">
            <Menu />
          </button>
        </SideBar>
        <h1 className="text-2xl text-primary font-bold">NavBar</h1>
      </div>
      <ul className="flex gap-5 max-md:hidden">
        {navLinks.map((item, index) => (
          <li key={index} className="group ">
            <Link href={item.link}>{item.name}</Link>
            <div className="w-0 group-hover:w-full h-[2px] duration-300 bg-primary"></div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center gap-4">
        <button className="relative">
          <ShoppingCart />
          <div className="absolute -top-2 -right-1 h-4 w-4 text-center rounded-full bg-primary text-[10px] text-background font-semibold">
            2
          </div>
        </button>
        <Button className="hover:bg-primary-200">Login</Button>
      </div>
    </section>
  );
}
