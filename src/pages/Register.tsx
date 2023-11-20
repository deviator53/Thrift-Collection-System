import React, { useState } from "react";
import Banner from "../images/lend-banner1.png";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [passwordType, setPasswordType] = useState<boolean>(true);
  const [confirmPasswordType, setConfirmPasswordType] = useState<boolean>(true);

  const togglePassword = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setPasswordType(!passwordType);
  };

  const toggleConfirmPassword = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setConfirmPasswordType(!confirmPasswordType);
  };
  return (
    <>
      <div>
        <div className="w-full flex items-center">
          <div className="bg-[#fdfdfd] w-[50%] h-screen">
            <div className="p-[10px]">
              <div className="">
                <h3 className="text-xl font-bold">Thrift System </h3>
              </div>
              <Box sx={formCardLeft}>
                <div className="w-[600px] h-[350px]">
                  <img
                    src={Banner}
                    alt="banner"
                    className="w-full h-full object-fit"
                  />
                </div>
              </Box>
            </div>
          </div>
          <div className="bg-white w-[50%] h-screen relative">
            <Box sx={formCard}>
              <h2 className="text-4xl font-bold text-[#213F7D] mb-6">
                Create An Account
              </h2>
              <p className="text-xl text-[#545F7D] mb-8">Enter your details.</p>

              <form className="bg-white">
                <div className="w-[450px]">
                  <div className="flex w-[100%] gap-4 mb-5">
                    <div className="w-[50%]">
                      <input
                        className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#39CDCC]"
                        required
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="w-[50%]">
                      <input
                        className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#39CDCC]"
                        required
                        type="text"
                        placeholder="Surname"
                      />
                    </div>
                  </div>
                  <div className="mb-5">
                    <input
                      className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#39CDCC]"
                      required
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#39CDCC]"
                      required
                      type="text"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="w-[100%] flex gap-2 mb-5">
                    <div className="w-[50%] relative">
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
                    <div className="w-[50%] relative">
                    <input
                        className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#39CDCC] pr-10"
                        required
                        type={confirmPasswordType ? "password" : "text"}
                        placeholder="Confirm Password"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer">
                        <button onClick={toggleConfirmPassword}>
                          {confirmPasswordType ? (
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
                  </div>
                  <div className="flex justify-start my-4">
                    <p>
                      <Link
                        to="/"
                        className="text-sm text-[#39CDCC] font-medium"
                      >
                        HAVE AN ACCOUNT? 
                      </Link>
                    </p>
                  </div>
                  <div className="mb-4">
                    <button className="w-full bg-[#39CDCC] font-bold text-white py-3 rounded-lg hover:bg-black">
                      CREATE
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
const formCardLeft = {
  margin: "0px",
  position: "absolute",
  top: "50%",
  right: "30%",
  transform: "translate(-50%, -50%)",
};
export default Register;
