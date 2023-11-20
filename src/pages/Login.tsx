import React, { useState } from "react";
import Banner from "../images/lend-banner1.png";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [passwordType, setPasswordType] = useState<boolean>(true);
  const togglePassword = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setPasswordType(!passwordType);
  };
  return (
    <>
      <div>
        <div className="w-screen h-screen flex">
          <div className="bg-[#fdfdfd] w-[50%] h-screen">
            <div className="p-[100px]">
              <div className="">
                <h3>Thrift System </h3>
              </div>
              <div className="w-[600px] h-[350px] mt-[200px]">
                <img
                  src={Banner}
                  alt="banner"
                  className="w-full h-full object-fit"
                />
              </div>
            </div>
          </div>
          <div className="bg-white w-[50%] h-screen relative">
            <Box sx={formCard}>
              <h2 className="text-4xl font-bold text-[#213F7D] mb-6">Welcome!</h2>
              <p className="text-xl text-[#545F7D] mb-8">Enter details to login.</p>

              <form className="bg-white">
                <div className="w-[450px]">
                  <div className="mb-5">
                    <input
                      className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#39CDCC]"
                      required
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-5 relative">
                    <input
                      className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#39CDCC] pr-10"
                      required
                      type={passwordType ? "password" : "text"}
                      placeholder="Password"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer">
                      <button onClick={togglePassword}>
                        {passwordType ? (
                          <span className="text-sm text-[#39CDCC] font-semibold">
                            SHOW
                          </span>
                        ) : (
                          <span className="text-sm text-[#39CDCC] font-semibold">
                            HIDE
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-start my-4">
                    <p>
                      <Link
                        to="/forgot-password"
                        className="text-sm text-[#39CDCC] font-medium"
                      >
                        FORGOT PASSWORD?
                      </Link>
                    </p>
                  </div>
                  <div className="mb-4">
                    <button className="w-full bg-[#39CDCC] font-bold text-white py-3 rounded-lg hover:bg-black">
                      LOG IN
                    </button>
                  </div>
                </div>
              </form>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};
const formCard = {
  margin: "0px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
export default Login;
