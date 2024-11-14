"use client";
import React from "react";
import { toggleRightSidebar } from "@/redux/features/layout/layoutslice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import LayoutChanger from "./layoutchanger";

// icons
import { RxCross2 } from "react-icons/rx";

const RightSidebar = () => {
  // Redux
  const isSidebarOpen = useAppSelector(
    (state) => state.layout.isOpenRightSidebar,
  );
  const dispatch = useAppDispatch();

  //   //resolved hydration error
  //   const [isClient, setIsClient] = useState(false);

  //   useEffect(() => {
  //     setIsClient(true);
  //   }, []);

  //   if (!isClient) {
  //     return null; // Or a loading spinner
  //   }

  return (
    <div
      className={`${
        isSidebarOpen ? "right-0" : " -right-[30rem]  pointer-events-none  "
      } lg:w-[23rem] w-[15rem] !transition-all !ease-in-out  !duration-300 h-full  absolute  top-0   z-[9999999999]    text-[1rem]    bg-white overflow-hidden `}
    >
      <div
        className={`${
          isSidebarOpen
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } transition-opacity ease-in-out duration-300 fixed inset-0 bg-black`}
        onClick={() => dispatch(toggleRightSidebar())}
        // Close sidebar when clicking on the overlay
      ></div>

      {/* Sidebar */}
      <div
        className={` lg:w-[23rem] w-[15rem]   h-full   text-[1rem] absolute top-0    bg-white overflow-hidden   `}
      >
        {/* Sidebar header  */}
        <header className="bg-blue-400 flex items-center justify-between py-3 px-4">
          <h2 className="font-bold   text-lg">Layout Customizer</h2>
          <button
            onClick={() => dispatch(toggleRightSidebar())}
            className="text-xl "
          >
            <RxCross2 />
          </button>
        </header>
        {/* Sidebar content here */}

        {/* layout Section  */}
        <LayoutChanger />
        {/* Color Scheme  */}
        {/* <ColorScheme /> */}
      </div>
    </div>
  );
};

export default RightSidebar;
