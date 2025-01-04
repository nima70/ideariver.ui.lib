"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/lib/components/ui/navigation-menu";
import { MenuItem as MenuItemType } from "./types";

interface MenuItemProps {
  item: MenuItemType;
}

export function MenuItem({ item }: MenuItemProps) {
  const Icon = ({ paths }: { paths: string[] }) => (
    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
      {paths.map((path, index) => (
        <path key={index} d={path} />
      ))}
    </svg>
  );

  if (item.subMenuItems && item.subMenuItems.length > 0) {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger className="bg-background text-foreground hover:bg-secondary p-2 rounded flex items-center">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-6 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            {item.subMenuItems.map((subItem) => (
              <ListItem
                key={subItem.title}
                title={subItem.title}
                href={subItem.href}
              >
                {subItem.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem>
      <Link href={item.href || "#"} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(
            "bg-background text-foreground hover:bg-secondary p-2 rounded flex items-center"
          )}
        >
          {item.title}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: string[] }
>(({ className, title, children, icon, ...props }, ref) => {
  const Icon = ({ paths }: { paths: string[] }) => (
    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
      {paths.map((path, index) => (
        <path key={index} d={path} />
      ))}
    </svg>
  );

  return (
    <li className="flex flex-col space-y-2">
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={props.href || "#"}
          className={cn(
            "bg-background block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-secondary focus:text-primary-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center">
            {icon && <Icon paths={icon} />}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
