"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { data } from "@/lib/data";

const links = [
  { name: data.Nav.home ,path: "/" },
  { name: data.Nav.tecnologias, path: "/tecnologias" },
  { name: data.Nav.experience, path: "/experience" },
  { name: data.Nav.projects, path: "/projects" },
  { name: data.Nav.contact, path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-8">  
      {links.map((link, index) => {
        return (
          <Link key={index} href={link.path} className={`${pathname === link.path && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent hover:border-accent transition-all`}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
