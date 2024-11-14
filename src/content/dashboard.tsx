import { FaRegUser } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
// import { MdOutlineSubscriptions, MdWorkOutline } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiInbox2Line } from "react-icons/ri";
// import { MdOutlineDangerous } from "react-icons/md";

import { RxDashboard, RxHome } from "react-icons/rx";
import { ILayoutMenuItem } from "@/interface/dashboard";

// import { FaUserCircle } from "react-icons/fa";
// import { IoIosPeople } from "react-icons/io";
// import { MdOutlineCategory, MdWork } from "react-icons/md";
// import { AiOutlineStock } from "react-icons/ai";
// import { MdOutlineSubscriptions } from "react-icons/md";
// import { MdInbox } from "react-icons/md";
export const dashboardMenu: ILayoutMenuItem[] = [
  { icon: <RxHome />, label: "Home", route: "/" },
  { icon: <RxDashboard />, label: "DashBoard", route: "/dashboard" },
  {
    icon: <FaRegUser />,
    label: "Profile",
    route: "/dashboard/profile",
  },
  {
    icon: <HiOutlineMailOpen />,
    label: "Loan Application",
    children: [
      {
        label: "Pending Loan ",
        route: "/dashboard/loan/pending-loan",
      },
      {
        label: "Approved Loan",
        route: "/dashboard/proposals/approved-loan",
      },
    ],
  },

  {
    icon: <FiUsers />,
    label: "Manage Users",
    children: [
      {
        label: "All Users",
        route: "/dashboard/user/all-user",
      },
      {
        label: "Lender",
        route: "/dashboard/user/lender",
      },
      {
        label: "Borrower",
        route: "/dashboard/user/borrower",
      },
    ],
  },
  { icon: <RiInbox2Line />, label: "Inbox", route: "/dashboard/inbox" },
];
