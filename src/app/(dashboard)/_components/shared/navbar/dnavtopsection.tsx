"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
// import NavNotification from "./navnotification";
import { toggleLeftSidebar } from "@/redux/features/layout/layoutslice";
import ScreenMode from "./screenmode";

const NavTopSection = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.layout.isOpenLeftSidebar);
  const layoutState = useAppSelector((state) => state.layout.layoutState);

  return (
    <div
      className={`  ${
        layoutState && ""
      } w-full px-5 flex items-center justify-center lg:justify-between bg-white    z-[999999]`}
    >
      {/* Left section  */}
      <section className="h-full flex items-center sm:gap-2 ">
        <button
          className={`text-xl sm:block md:hidden lg:block bg-gray-100 p-2 rounded-full  ${
            layoutState === "horizontal" && "lg:hidden"
          }`}
          onClick={() => dispatch(toggleLeftSidebar())}
        >
          {isOpen ? (
            <span className="text-gray-500  ">
              <CgMenuRight />
            </span>
          ) : (
            <span className="text-gray-500">
              <CgMenuLeft />
            </span>
          )}
        </button>
      </section>

      {/* Right Section */}
      <section className="flex items-center sm:gap-2">
        {/* <NavNotification /> */}
        <ScreenMode />
        {/* <NavProfile /> */}
      </section>
    </div>
  );
};

export default NavTopSection;
