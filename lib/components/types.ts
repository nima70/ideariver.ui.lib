import { ReactNode } from "react";

export interface MenuItem {
  title: string;
  href?: string;
  description?: string;
  icon?: ReactNode;
  subMenuItems?: MenuItem[];
}
