"use client";

import * as React from "react";
import Link from "next/link";
import { MenuItem as MenuItemType } from "./types";
import { ScrollArea } from "@/lib/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface SidebarProps {
  open: boolean;
  toggleSidebar: () => void;
  menuItems: MenuItemType[];
}

export function Sidebar({ open, toggleSidebar, menuItems }: SidebarProps) {
  return (
    <div
      className={`fixed top-0 left-0 w-64 bg-primary text-primary-foreground h-full z-50 transition-transform transform ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button
          className="text-primary-foreground hover:text-secondary"
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <ScrollArea className="h-[calc(100%-4rem)] mb-4">
        <nav>
          <ul>
            {menuItems.map((item) => (
              <SidebarItem key={item.title} item={item} />
            ))}
          </ul>
        </nav>
      </ScrollArea>
    </div>
  );
}

const SidebarItem = ({ item }: { item: MenuItemType }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  const IconWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="h-5 w-5 mr-2 flex items-center justify-center">
        {children}
      </div>
    );
  };

  if (item.subMenuItems && item.subMenuItems.length > 0) {
    return (
      <li className="p-2">
        <div
          className="text-primary-foreground p-2 flex items-center cursor-pointer hover:bg-primary-foreground hover:text-primary"
          onClick={toggleSubMenu}
        >
          {item.icon && <IconWrapper>{item.icon}</IconWrapper>}
          {item.title}
          <svg
            className={`h-5 w-5 ml-auto transition-transform duration-300 ${
              isOpen ? "transform rotate-180" : "transform rotate-270"
            }`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 15l-6-6h12z" />
          </svg>
        </div>
        <ul
          className={cn(
            "pl-4 transition-all duration-300 overflow-hidden",
            isOpen ? "max-h-screen" : "max-h-0"
          )}
        >
          {item.subMenuItems.map((subItem) => (
            <li key={subItem.title}>
              <Link href={subItem.href || "#"} legacyBehavior passHref>
                <div className="block p-2 text-primary-foreground hover:text-primary hover:bg-primary-foreground  rounded flex items-center">
                  {subItem.icon && <IconWrapper>{subItem.icon}</IconWrapper>}
                  {subItem.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  return (
    <li className="p-2">
      <Link href={item.href || "#"} legacyBehavior passHref>
        <div className="block p-2 text-primary-foreground hover:text-primary hover:bg-primary-foreground rounded flex items-center">
          {item.icon && <IconWrapper>{item.icon}</IconWrapper>}
          {item.title}
        </div>
      </Link>
    </li>
  );
};
