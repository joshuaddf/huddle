"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/images/logo.svg";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="flex items-center justify-between h-[8rem] lg:h-[10rem] mx-">
      <div className="hidden lg:block">
        <Link href={"/"}>
          <Image src={Logo} alt="Logo" width={200} height={200} />
        </Link>
      </div>

      <div className="block lg:hidden">
        <Link href={"/"}>
          <Image src={Logo} alt="Logo" width={150} height={150} />
        </Link>
      </div>

      <div className="px-4 hover:border-Light-Pink hover:text-Light-Pink py-1 border-2 rounded-full lg:py-2 lg:px-7 border-Pink text-Pink">
        {pathName === "/free" ? (
          <button>
            <Link href={"/"}>Home</Link>
          </button>
        ) : (
          <button>
            <Link href={"/free"}>Try it free</Link>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
