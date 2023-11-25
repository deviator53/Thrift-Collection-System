import React, { useState, useEffect } from "react";
import Banner from "../images/lend-banner1.png";
import { useDispatch, useSelector } from 'react-redux';
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { login } from '../redux/slices/authSlice';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchUsers, setLoggedInUser, setUser } from "../redux/slices/userSlice";
import { RootState } from "../redux/types";
import { AnyAction, Dispatch, ThunkDispatch } from "@reduxjs/toolkit";

interface UserType {
  id: number;
  info: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    role: string;
  };
 
  wallet: {
    balance: number;
  };
}

const Login: React.FC = () => {
  const user = useSelector((state: RootState) => state.users.user);
  console.log("reduxdata",user);
  const status = useSelector((state: RootState) => state.users.status);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordType, setPasswordType] = useState<boolean>(true);
  const togglePassword = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setPasswordType(!passwordType);
  };

  useEffect(() => {
    (dispatch as ThunkDispatch<RootState, void, AnyAction>)(fetchUsers());
  }, [dispatch]);


const handleLogin = (e: React.FormEvent) => {
  e.preventDefault();

  const loggedInUser = user?.find((u:UserType) => u.info.email === email && u.info.password === password);

  if (loggedInUser) {
    dispatch(setLoggedInUser(loggedInUser));
    toast.success("login succesfull", {
      autoClose: 3000,
      position: "top-right",
    });
    navigate("/dashboard");
  } else {
    toast.error("invalid credentials", {
      autoClose: 3000,
      position: "top-right",
    });
    console.log("Login failed");
  }
};

if (status === "loading") {
  return <div className="flex justify-center items-center w-screen h-screen text-3xl font-semibold">Loading...</div>;
}

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
              <h2 className="text-4xl font-bold text-[#213F7D] mb-6">Welcome!</h2>
              <p className="text-xl text-[#545F7D] mb-8">Enter details to login.</p>

              <form className="bg-white">
                <div className="w-[450px]">
                  <div className="mb-5">
                    <input
                      className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#39CDCC]"
                      required
                      type="text"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-5 relative">
                    <input
                      className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#39CDCC] pr-10"
                      required
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
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
                  <div className="flex justify-between">
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
                  <div className="flex justify-end my-4">
                    <p>
                      <Link
                        to="/register"
                        className="text-sm text-[#39CDCC] font-medium"
                      >
                        DON'T HAVE AN ACCOUNT?
                      </Link>
                    </p>
                  </div>
                  </div>
                  <div className="mb-4">
                    <button onClick={handleLogin} className="w-full bg-[#39CDCC] font-bold text-white py-3 rounded-lg hover:bg-black">
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
const formCardLeft = {
  margin: "0px",
  position: "absolute",
  top: "50%",
  right: "30%",
  transform: "translate(-50%, -50%)",
};
export default Login;
