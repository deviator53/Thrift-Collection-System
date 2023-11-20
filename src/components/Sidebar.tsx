import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  DASHBOARD_SIDEBAR_LINKS,
  SIGNOUT,
} from "../constants/SidebarLinks";

const Sidebar = () => {
  return (
    <>
      <div className="bg-white border border-[#DCDCDC] w-[283px] h-full flex flex-col min-h-screen overflow-y-auto flex-shrink-0">
        {DASHBOARD_SIDEBAR_LINKS?.map((item, index: number) => (
          <>
            <NavLink
              to={item.path}
              key={item.key}
              className={({ isActive }) =>
                [
                  "flex gap-5 py-2 items-center my-2 px-4 hover:bg-[#39CDCC]/[.2] hover:border-l-4 hover:border-[#39CDCC]",
                  isActive
                    ? "border-l-4 border-[#39CDCC] bg-[#39CDCC]/[.2]"
                    : null,
                ]
                  .filter(Boolean)
                  .join(" ")
              }
              end
            >
              <span>
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-5 h-5 object-fit"
                />
              </span>
              <span className="text-[#213F7D]">{item.label}</span>
            </NavLink>
          </>
        ))}
        
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
        {SIGNOUT?.map((item, index: number) => (
          <>
            <NavLink
              to={item.path}
              key={item.key}
              className={({ isActive }) =>
                [
                  "flex gap-5 py-2 items-center my-1 px-4 hover:bg-[#39CDCC]/[.2] hover:border-l-4 hover:border-[#39CDCC]",
                  isActive
                    ? "border-l-4 border-[#39CDCC] bg-[#39CDCC]/[.2]"
                    : null,
                ]
                  .filter(Boolean)
                  .join(" ")
              }
              end
            >
              <span>
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-5 h-5 object-fit"
                />
              </span>
              <span className="text-[#213F7D]">{item.label}</span>
            </NavLink>
          </>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
