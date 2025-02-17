import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { data } from "@/lib/data";

const Header = () => {
  return (
    <header className="py-8 xl:py-5 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          {/* <h1 className="text-4xl font-semibold">AX.</h1> */}
          <Image
            src="/logo-white.svg"
            priority
            quality={75}
            color="white"
            width={160}
            height={100}
            className="text-red-500"
            alt="Ax Developer"
          />
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>{data.Nav.HireMe}</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
