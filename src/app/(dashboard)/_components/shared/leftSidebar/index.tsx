/* eslint-disable react/no-children-prop */
"use client";
import { ILayoutMenuItem } from "@/interface/dashboard";
import { setLogOut } from "@/redux/features/auth/authSlice";
import { toggleLeftSidebar } from "@/redux/features/layout/layoutslice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CgMenuLeft } from "react-icons/cg";
import { HiArrowLongLeft } from "react-icons/hi2";
import { TbLogout } from "react-icons/tb";
import LeftSidebarDropdown from "./leftSidebarDropdown";
import Avatar from "@/components/shared/Avatar";
import { IProfile } from "@/interface/profile";

interface ISidebarProps {
  title?: string;
  menuGroups: ILayoutMenuItem[];
}

const LeftSidebar: React.FC<ISidebarProps> = ({ menuGroups, title }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector(
    (state) => state.layout.isOpenLeftSidebar,
  );
  const profileInfo = useAppSelector((state) => state.auth.profile) as IProfile;
  const role = profileInfo?.user?.role as string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleLogOut = () => {
    dispatch(setLogOut());
    router.push("/auth");
  };

  return (
    <aside
      className={`${
        isSidebarOpen
          ? "w-[18rem]"
          : "md:w-[6rem] opacity-0 pointer-events-none md:pointer-events-auto md:opacity-100"
      } transition-all duration-300 h-full absolute md:sticky top-0 left-0 z-[9999] text-[1rem] no-scrollbar  bg-primary`}
    >
      <div className="flex items-center justify-center">
        <button
          className="text-3xl lg:hidden p-5"
          onClick={() => dispatch(toggleLeftSidebar())}
        >
          {isSidebarOpen ? <HiArrowLongLeft /> : <CgMenuLeft />}
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 w-full py-4">
        {role === "admin" && isSidebarOpen && (
          <div className="mt-3">{/* <Logo /> */}</div>
        )}

        {(role === "borrower" || role === "lender") && isSidebarOpen && (
          <Avatar url={profileInfo?.user.profilePhoto as string} />
        )}
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto h-[calc(100vh-130px)] duration-300 ease-linear">
        <section className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          {!!title && isSidebarOpen && (
            <h3 className="mb-4 ml-4 text-sm font-semibold text-white">
              {title}
            </h3>
          )}

          <nav className="space-y-4">
            {menuGroups?.map((group, groupIndex) => (
              <div key={groupIndex}>
                {group.children ? (
                  <LeftSidebarDropdown
                    isSidebarOpen={isSidebarOpen}
                    children={group.children as []}
                    icon={group.icon}
                    label={group.label}
                  />
                ) : (
                  <div>
                    <Link
                      className={`flex items-center text-md gap-4  transition-colors duration-200 `}
                      href={group.route || "/"}
                    >
                      <div className="border rounded-full p-2">
                        <span
                          className={`${!isSidebarOpen && "text-xl "} text-sm text-white  `}
                        >
                          {group.icon && group.icon}
                        </span>
                      </div>
                      <span
                        className={`${!isSidebarOpen && "hidden"} text-sm font-semibold hover:text-white`}
                      >
                        {group.label}
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            ))}

            {/* it's for logout functionlites  */}
            <div className="flex items-center justify-between w-full transition-colors duration-200 group hover:text-red-500">
              <button
                onClick={handleLogOut}
                className="flex items-center gap-4 text-md font-semibold transition-colors duration-200 group-hover:text-red-500"
              >
                <span
                  className={`${
                    !isSidebarOpen ? "text-xl" : "text-sm"
                  } flex items-center p-2 rounded-full border text-white transition-colors duration-200 group-hover:text-red-500 group-hover:border-red-500`}
                >
                  <TbLogout />
                </span>
                {isSidebarOpen && (
                  <span className="whitespace-nowrap">Logout</span>
                )}
              </button>
            </div>
          </nav>
        </section>
      </div>
    </aside>
  );
};

export default LeftSidebar;
