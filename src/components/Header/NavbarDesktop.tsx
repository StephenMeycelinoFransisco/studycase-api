"use client";

import Image from "next/image";
import Link from "next/link";
import PokeDexs from "@/app/favicon.ico";
import { usePathname } from "next/navigation";
import { MenuItem } from "@/types/type";
import { ModeToggle } from "../toogle-button";

interface NavbarDesktopProps {
  menuItems: MenuItem[];
}

export default function NavbarDesktop({ menuItems }: NavbarDesktopProps) {
  const pathName = usePathname();
  return (
    <>
      <Link href={"/"}>
        <Image alt="Logo PokeDexs" src={PokeDexs} className="w-14" />
      </Link>
      <nav>
        <ul className="flex items-center gap-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`uppercase font-bold  ${
                pathName === item.href
                  ? "text-rose-500 hover:text-rose-300"
                  : "text-slate-700 hover:text-slate-500 dark:text-white dark:hover:text-slate-300"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <ModeToggle />
        </ul>
      </nav>
    </>
  );
}
