import { Menu, Transition } from "@shadcn/ui";
import Link from "next/link";
import { Fragment } from "react";
import { MenuItem } from "./types";
import { ChevronDownIcon } from "@heroicons/react/solid";

type MenuItemComponentProps = {
  item: MenuItem;
  handleLinkClick: () => void;
  index: number;
  openSubMenus: Record<number, boolean>;
  toggleSubMenu: (index: number) => void;
};

const MenuItemComponent = ({
  item,
  handleLinkClick,
  index,
  openSubMenus,
  toggleSubMenu,
}: MenuItemComponentProps) => {
  return (
    <div className="relative group md:static">
      {item.subMenuItems ? (
        <Menu>
          <Menu.Button className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-primary-light rounded transition-colors duration-300">
            {item.name}
            <ChevronDownIcon className="w-5 h-5 ml-2" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute left-0 md:left-auto md:top-full mt-2 w-full md:w-48 bg-white md:bg-primary text-black md:text-white rounded-md shadow-lg">
              {item.subMenuItems.map((subItem) => (
                <Menu.Item key={subItem.to}>
                  {({ active }) => (
                    <Link href={subItem.to} legacyBehavior>
                      <a
                        className={`block px-4 py-2 ${
                          active ? "bg-gray-100 md:bg-primary-light" : ""
                        } transition-colors duration-300`}
                        onClick={handleLinkClick}
                      >
                        {subItem.name}
                      </a>
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      ) : (
        <Link key={item.to} href={item.to} legacyBehavior>
          <a
            className="block px-4 py-2 text-white hover:bg-primary-light rounded transition-colors duration-300"
            onClick={handleLinkClick}
          >
            {item.name}
          </a>
        </Link>
      )}
    </div>
  );
};

export default MenuItemComponent;
