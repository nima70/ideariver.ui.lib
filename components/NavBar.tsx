"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "@/lib/components/icons";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/lib/components/ui/navigation-menu";
import { MenuItem as MenuItemType } from "./types";
import { MenuItem } from "./MenuItem";
import { Sidebar } from "./Sidebar";
import { ModeToggle } from "./ui/ModeToggle";

interface NavBarProps {
  menuItems: MenuItemType[];
  siteName: string; // New prop for dynamic naming
}

export function NavBar({ menuItems, siteName }: NavBarProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-background text-foreground shadow-lg z-50">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <div className="text-2xl font-bold transition-transform duration-500 transform">
            <Link href="/" legacyBehavior passHref>
              <div className="flex items-center cursor-pointer">{siteName}</div>
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-foreground" onClick={toggleSidebar}>
              <Icons.hamburger className="h-6 w-6 hover:text-secondary" />
            </button>
          </div>
          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <MenuItem key={item.title} item={item} />
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <ModeToggle />
          </div>
        </div>
      </nav>
      <Sidebar
        open={sidebarOpen}
        toggleSidebar={toggleSidebar}
        menuItems={menuItems}
      />
    </>
  );
}
