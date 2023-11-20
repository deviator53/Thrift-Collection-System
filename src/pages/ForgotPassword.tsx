import React, { useState } from "react";
import Banner from "../images/lend-banner1.png";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const ForgotPassword: React.FC = () => {
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
              <h2 className="text-4xl font-bold text-[#213F7D] mb-6">Forgot Password?</h2>
              <p className="text-xl text-[#545F7D] mb-8">Enter email linked with account.</p>

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
                  
                  <div className="flex justify-start my-4">
                    <p>
                      <Link
                        to="/"
                        className="text-sm text-[#39CDCC] font-medium"
                      >
                        GO BACK TO LOGIN
                      </Link>
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <button className="w-full bg-[#39CDCC] font-bold text-white py-3 rounded-lg hover:bg-black">
                      SUBMIT
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
export default ForgotPassword;
