import React from "react";
import { Link } from "react-router-dom";
import NotFound from "../images/404.jpg";

const PageNotFound = () => {
  return (
    <>
      <div className=" bg-white">
       
      <div className="m-auto w-full text-center my-5 py-5">
        <div className="flex justify-center">
          <div className="w-[650px] h-[400px]">
            <img src={NotFound} className="w-full h-full object-fit" alt="" />
          </div>
        </div>
        <Link className="text-[#3F3F95] font-semibold my-3" to="/dashboard">
          <div className="flex justify-center">
            <svg
              className="mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
            </svg>
            Go back to Home Page
          </div>
        </Link>
      </div>
      </div>
    </>
  );
};

export default PageNotFound;
