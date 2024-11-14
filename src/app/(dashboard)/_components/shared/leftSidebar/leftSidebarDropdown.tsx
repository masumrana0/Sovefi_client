"use client";
import Link from "next/link";
import React, { useState } from "react";
// icons
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";

interface IChildrenMenu {
  icon?: React.ReactNode;
  label: string;
  route: string;
}

interface IMenuItem {
  icon: React.ReactNode;
  label: string;
  children: IChildrenMenu[];
  isSidebarOpen: boolean;
}

const LeftSidebarDropdown: React.FC<IMenuItem> = ({
  icon,
  label,
  children,
  isSidebarOpen,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={`transition-all duration-300 ease-in overflow-hidden w-full ${isOpen ? "max-h-[500px]" : "max-h-10"}`}
    >
      {/* Collapse button */}
      <button
        onClick={handleToggle}
        className="flex items-center justify-between w-full"
      >
        <div className="flex items-center gap-4">
          {icon && (
            <span
              className={` border rounded-full p-2 text-white ${!isSidebarOpen ? "text-[22px]" : ""}`}
            >
              {icon}
            </span>
          )}
          <span
            className={`${!isSidebarOpen ? "hidden" : "text-sm hover:text-white text-nowrap font-semibold"}`}
          >
            {label}
          </span>
        </div>
        <span
          className={`text-white ${!isSidebarOpen ? "hidden" : "text-md transition-transform duration-500"} ${isOpen ? "rotate-180" : ""}`}
        >
          <RiArrowDownSLine />
        </span>
      </button>

      {/* Collapse content */}
      {isSidebarOpen && (
        <div className="text-md ml-4 mt-3 space-y-2">
          {children.map((menu, index) => (
            <Link
              key={index}
              className="flex items-center text-nowrap text-xs gap-3 hover:text-white"
              href={menu.route}
            >
              <span className="text-md text-white">
                {menu.icon || <MdKeyboardArrowRight />}
              </span>
              <span
                className={`${!isSidebarOpen ? "hidden" : "text-sm text-nowrap font-semibold"}`}
              >
                {menu.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LeftSidebarDropdown;
