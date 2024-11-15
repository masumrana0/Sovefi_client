"use client";

import { useAppSelector } from "@/redux/hook";
import NavTopSection from "./dnavtopsection";
import DNavBottomSection from "./navbottomsection";
import { dashboardMenu } from "@/content/dashboard";

const DashBoardNav = () => {
  const layoutState = useAppSelector((state) => state.layout.layoutState);

  return (
    <div>
      <section>
        <NavTopSection />
      </section>
      <section
        className={`${!(layoutState === "horizontal") && "md:hidden"} hidden md:block   `}
      >
        <DNavBottomSection menuContent={dashboardMenu} />
      </section>
    </div>
  );
};

export default DashBoardNav;
