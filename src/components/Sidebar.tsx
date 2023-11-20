import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  BUSINESS_SIDEBAR_LINKS,
  CUSTOMER_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
  SETTINGS_SIDEBAR_LINKS,
  SIGNOUT,
} from "../constants/SidebarLinks";

const Sidebar = () => {
  return (
    <>
      <div className="bg-white border border-[#DCDCDC] w-[283px] h-[1500px] flex flex-col min-h-screen overflow-y-auto flex-shrink-0">
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
              <span>{item.dropdown}</span>
            </NavLink>
          </>
        ))}
        <p className="text-sm ml-4 my-2">CUSTOMERS</p>
        {CUSTOMER_SIDEBAR_LINKS?.map((item, index: number) => (
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
        <p className="text-sm ml-4 my-2">BUSINESSES</p>
        {BUSINESS_SIDEBAR_LINKS?.map((item, index: number) => (
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
        <p className="text-sm ml-4 my-2">SETTINGS</p>
        {SETTINGS_SIDEBAR_LINKS?.map((item, index: number) => (
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
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
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
        <p className="ml-4 my-2 text-[#213F7D]">v1.2.0</p>
      </div>
    </>
  );
};

export default Sidebar;
