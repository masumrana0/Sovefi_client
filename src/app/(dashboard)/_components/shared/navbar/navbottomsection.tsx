"use client";
 
import Link from "next/link";
import React from "react";
import DNavBottomDropdown from "./navbottomdropdown";
import { ILayoutMenuItem } from "@/interface/dashboard";

const DNavBottomSection: React.FC<{ menuContent: ILayoutMenuItem[] }> = ({
  menuContent,
}) => {
  return (
    <div className="w-full border-b border-gray-400 ">
      <div className="container mx-auto h-12 py-2  shadow-xl text-sm lg:text-base flex items-center md:justify-center lg:justify-start gap-3 lg:gap-10 ">
        {menuContent.map((menu: ILayoutMenuItem, index) => (
          <div className="z-[999999]" key={index}>
            {menu.children ? (
              <DNavBottomDropdown
                icon={menu.icon}
                label={menu.label}
                // eslint-disable-next-line react/no-children-prop
                children={menu.children as []}
              />
            ) : (
              <Link
                className="flex items-center gap-1"
                href={menu.route as string}
              >
                {menu?.icon}
                {menu?.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DNavBottomSection;
