import React from "react";
import { Link } from "react-router-dom";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { IconButton } from "@mui/material";
import Avatar from "../images/avatars.png";

const Header = () => {
  return (
    <>
      <div className="w-full fixed top-0 bg-white h-24 px-4 flex justify-between items-center border-b border-gray-200">
        <div className="p-6">
          <div className="">
            <h3 className="text-xl font-bold">Thrift system</h3>
          </div>
        </div>
        <div>
          <div className="w-[400px] mb-3">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                type="search"
                className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-[#39CDCC] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(57,205,204)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-[#39CDCC]"
                placeholder="Search for anything"
                aria-label="Search"
                aria-describedby="button-addon1"
              />

              <button
                className="relative z-[2] flex items-center rounded-r bg-[#39CDCC] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-7 justify-end">
          <div>
            <button className="text-lg text-[#213F7D] font-semibold">₦7,000.00</button>
          </div>
          <div>
            <IconButton>
              <NotificationsOutlinedIcon sx={{ fontSize: 30, color: '#213F7D' }} />
            </IconButton>
          </div>
          <div className="flex gap-2">
          <div className="w-[50px] h-[50px]">
            <img src={Avatar} alt="avatar" className="w-full h-full object-fit"/>
            </div>
            <div className="flex items-center">
              <p className="text-lg text-[#213F7D]">Admin</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 14l-4-4h8z" fill="rgba(154,154,165,1)"/></svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
