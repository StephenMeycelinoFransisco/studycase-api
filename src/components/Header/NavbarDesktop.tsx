"use client";

import Image from "next/image";
import Link from "next/link";
import PokeDexs from "@/app/favicon.ico";
import { usePathname } from "next/navigation";
import { MenuItem } from "@/types/type";
import { ModeToggle } from "../toogle-button";
import { motion } from "framer-motion";

interface NavbarDesktopProps {
  menuItems: MenuItem[];
}

export default function NavbarDesktop({ menuItems }: NavbarDesktopProps) {
  const pathName = usePathname();
  return (
    <>
      <Link href={"/"}>
        <motion.div
          initial={{ scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Image alt="Logo PokeDexs" src={PokeDexs} className="w-14" />
        </motion.div>
      </Link>

      <nav>
        <ul className="flex items-center gap-4">
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className={`uppercase font-bold  ${
                  pathName === item.href
                    ? "text-rose-500 hover:text-rose-300"
                    : "text-slate-700 hover:text-slate-500 dark:text-white dark:hover:text-slate-300"
                }`}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: menuItems.length * 0.1 }}
          >
            <ModeToggle />
          </motion.div>
        </ul>
      </nav>
    </>
  );
}
