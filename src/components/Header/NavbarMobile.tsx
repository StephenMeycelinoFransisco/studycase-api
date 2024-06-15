"use client";

import Image from "next/image";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import PokeDexs from "@/app/favicon.ico";
import { MenuItem } from "@/types/type";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

interface NavbarMobileProps {
  menuItems: MenuItem[];
}

const NavbarMobile = ({ menuItems }: NavbarMobileProps) => {
  const pathName = usePathname();
  return (
    <>
      <Image alt="Logo PokeDexs" src={PokeDexs} className="w-12" />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MenuIcon className="w-6 h-6 text-slate-700" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>PokeDexs</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {menuItems.map((item, index) => (
            <DropdownMenuItem key={index}>
              <Link
                href={item.href}
                className={`uppercase font-bold  ${
                  pathName === item.href
                    ? "text-rose-700 hover:text-rose-500 "
                    : "text-slate-700 hover:text-slate-500"
                }`}
              >
                {item.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default NavbarMobile;