"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { data } from "@/lib/data";

const links = [
  { name: data.Nav.home ,path: "/" },
  { name: data.Nav.services, path: "/services" },
  { name: data.Nav.resume, path: "/resume" },
  { name: data.Nav.work, path: "/work" },
  { name: data.Nav.contact, path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-28 mb-36 flex justify-center items-center">
          <Link href="/">
            <Image
              src="/logo-white.svg"
              priority
              quality={75}
              color="white"
              width={160}
              height={100}
              alt="Ax Developer"
            />
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={`${
                  pathname === link.path &&
                  "text-accent border-b-2 border-accent"
                } capitalize font-medium hover:text-accent hover:border-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
