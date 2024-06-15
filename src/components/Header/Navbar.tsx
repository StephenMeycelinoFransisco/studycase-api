"use client";

// CUSTOM HOOK FOR HANDLE RESPONSIVE
import { useMediaQuery } from "usehooks-ts";

// UI COMPONENTS
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";
import { menuItems } from "@/utils/menuItems";

export default function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 640px)", {
    // initializeWithValue untuk memastikan value default,
    initializeWithValue: false,
  });

  return (
    <>
      {isDesktop ? (
        <NavbarDesktop menuItems={menuItems} />
      ) : (
        <NavbarMobile menuItems={menuItems} />
      )}
    </>
  );
}
