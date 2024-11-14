"use client";
import { Suspense } from "react";

import { CiSettings } from "react-icons/ci";

import RightSidebar from "./_components/shared/rightsidebar";
import DashBoardNav from "./_components/shared/navbar";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

import { toggleRightSidebar } from "@/redux/features/layout/layoutslice";
import LeftSidebar from "./_components/shared/leftSidebar";
import { ILayoutMenuItem } from "@/interface/dashboard";
import { dashboardMenu } from "@/content/dashboard";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const layoutState = useAppSelector((state) => state.layout.layoutState);

  return (
    <div className="flex h-screen overflow-hidden relative">
      {/* Sidebar */}
      <aside className={`${layoutState === "horizontal" ? "md:hidden" : ""}`}>
        <LeftSidebar
          menuGroups={dashboardMenu as ILayoutMenuItem[]}
          title="Menu"
        />
      </aside>

      {/* Main Section with Header and Content */}
      <section className="w-full h-full overflow-hidden">
        {/* Header */}
        <header>
          <DashBoardNav />
        </header>

        {/* Main Content */}
        <main className="bg-gray-100 md:p-5 h-[calc(100vh-9px)] overflow-y-auto">
          {/* Floating Settings Button */}
          <div className="absolute bottom-10 right-10 bg-[#4396c7] h-12 w-12 rounded-full hidden md:flex items-center justify-center z-[9999]">
            <button
              onClick={() => dispatch(toggleRightSidebar())}
              className="text-white text-3xl"
              aria-label="Toggle Right Sidebar"
            >
              <CiSettings />
            </button>
          </div>
          {children}
        </main>
      </section>

      {/* Right Sidebar */}
      <aside className="hidden md:block overflow-hidden">
        <RightSidebar />
      </aside>
    </div>
  );
};

export default DashBoardLayout;
