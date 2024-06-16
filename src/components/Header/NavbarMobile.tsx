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
import { motion } from "framer-motion";
import { ModeToggle } from "../toogle-button";

interface NavbarMobileProps {
  menuItems: MenuItem[];
}

const NavbarMobile = ({ menuItems }: NavbarMobileProps) => {
  // Mengambil pathName dari browser menggunakan usePathname
  const pathName = usePathname();
  return (
    <>
      <Image alt="Logo PokeDexs" src={PokeDexs} className="w-12" />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MenuIcon className="w-6 h-6 dark:text-white text-slate-700" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>PokeDexs</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* Melooping menu item */}
          {menuItems.map((item, index) => (
            <DropdownMenuItem key={index}>
              <Link
                href={item.href}
                className={`uppercase font-bold  ${
                  pathName === item.href
                    ? "text-rose-700 hover:text-rose-500 "
                    : "text-slate-700 hover:text-slate-500 dark:text-white dark:hover:text-slate-300"
                }`}
              >
                {item.name}
              </Link>
            </DropdownMenuItem>
          ))}
          {/* Toggle Mode Button */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: menuItems.length * 0.1 }}
          >
            <ModeToggle />
          </motion.div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default NavbarMobile;
