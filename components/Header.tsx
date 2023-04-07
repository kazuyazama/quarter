"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Drawer from "./Drawer";
import HamburgerButton from "./HamburgerButton";

const navItems = [
  {
    label: "ホーム",
    path: "/",
  },
  {
    label: "QUARTERについて",
    path: "/about",
  },
  {
    label: "メニュー",
    path: "/menu",
  },
  {
    label: "Instagram",
    path: "https://www.instagram.com/barber_quarter/?hl=ja",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const DrawerToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="mx-auto flex  max-w-screen-xl items-center overflow-hidden ">
      <div className="flex-1">
        <Link href="/">
          <Image
            src="/quarter-logo.svg"
            alt="logo"
            width={140}
            height={100}
            className="object-cover"
          />
        </Link>
      </div>

      <HamburgerButton DrawerToggle={DrawerToggle} isOpen={isOpen} />

      <nav>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} navItems={navItems} />

        <ul className="hidden items-center lg:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.path}>
              <li className="text-rose-300 px-14 py-5 text-secondary">
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
