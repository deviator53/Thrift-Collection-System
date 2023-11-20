import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Rating } from "@mui/material";
import GeneralDetails from "../components/Tabs/GeneralDetails";
import Documents from "../components/Tabs/Documents";
import BankDetails from "../components/Tabs/BankDetails";
import Loans from "../components/Tabs/Loans";
import Savings from "../components/Tabs/Savings";
import AppandSystem from "../components/Tabs/AppandSystem";

export interface UserData {
  userName: string;
  profile: {
    avatar: string;
    firstName: string;
    lastName: string;
    bvn: string;
    gender: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string,
    officeEmail: string,
    loanRepayment: string,
    monthlyIncome: Array<string>,
  };
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
  accountBalance: string;
  accountNumber: string;
  phoneNumber: string;
  email: string;
  // Add more properties if necessary
}

interface Tab {
  name: string;
  content: JSX.Element;
  data?: any;
}



const User = () => {

  const [activeTab, setActiveTab] = useState<number>(0);

  const { userId } = useParams<{userId: string}>();

  const [data, setData] = useState<UserData>({
    userName: "",
    profile: {
      avatar: "",
      firstName: "",
      lastName: "",
      bvn: "",
      gender: "",
    },
    education: {
      level: "",
      employmentStatus: "",
      sector: "",
      duration: "",
      officeEmail: "",
      loanRepayment: "",
      monthlyIncome: [],
    },
    socials: {
      facebook: "",
      instagram: "",
      twitter: "",
    },
    guarantor: {
      firstName: "",
      lastName: "",
      gender: "",
      phoneNumber: "",
      address: "",
    },
    accountBalance: "",
    accountNumber: "",
    phoneNumber: "",
    email: "",
  });

  const fetchData = async () => {
    await axios
      .get<UserData>(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`
      )
      .then((res) => {
        setData(res.data);
        // console.log(res);
        console.log(res.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, [userId]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tabs: Tab[] = [
  { name: "General Details", content: <GeneralDetails data={data}/> },
  { name: "Documents", content: <Documents data={data}/> },
  { name: "Bank Details", content: <BankDetails data={data}/> },
  { name: "Loans", content: <Loans data={data}/> },
  { name: "Savings", content: <Savings data={data} /> },
  { name: "App and System", content: <AppandSystem data={data}/> },
];
 

  return (
    <>
      <div className="p-[80px]">
        <Link to="/dashboard/users">
        <div className="flex items-center gap-5 mb-[30px]">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
                fill="rgba(100,205,138,1)"
              ></path>
            </svg>
          </span>
          <span className="text-[#545F7D]">Back to Users</span>
        </div>
        </Link>
        <div className="flex justify-between">
          <div>
            <p className="text-2xl text-[#213F7D] font-semibold">
              User Details
            </p>
          </div>
          <div className="flex gap-5">
            <button className="p-2 px-4 border-2 border-red-500 rounded-md font-semibold text-red-500 text-sm hover:bg-red-500 hover:text-white">
              BLACKLIST USER
            </button>
            <button className="p-2 px-4 border-2 border-[#39CDCC] rounded-md font-semibold text-[#39CDCC] text-sm hover:bg-[#39CDCC] hover:text-white">
              ACTIVATE USER
            </button>
          </div>
        </div>
        <div className="w-full bg-white rounded-md shadow-md mt-8">
          <div className="p-[20px]">
            <div className="flex items-center gap-5 divide-x">
              <div className="flex items-center gap-4">
                <div className="w-[100px] h-[100px]">
                  <img
                    src={data.profile.avatar}
                    alt=""
                    className="w-full h-full rounded-full object-fit"
                  />
                </div>
                <div>
                  <p className="text-lg text-[#213F7D] font-semibold">{data.profile.firstName} {data.profile.lastName}</p>
                  <p className="text-[#545F7D]">{data.profile.bvn}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-[#545F7D]">User's Tier</p>
                <div className="mt-4">
                        <Rating
                          name="read-only"
                          value={1}
                          readOnly
                        />
                        
                </div>
              </div>
              <div className="p-4">
                <p className="text-lg text-[#213F7D] font-semibold">₦{data.accountBalance}</p>
                <p className="text-[#213F7D]">{data.accountNumber}/Providus Bank</p>
              </div>
            </div>
          </div>
          <div className="px-[20px]">
            <div className="flex gap-[80px]">
            {tabs.map((tab: Tab, index: number) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? "text-lg text-[#39CDCC] border-b-[3px] border-[#39CDCC]" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            <span className="text-lg cursor-pointer p-2">{tab.name}</span>
          </div>
        ))}
            </div>
          </div>
        </div>
        <div className="mt-[40px] mb-[80px]">
          <div className="w-full p-[20px] bg-white shadow-md rounded-md">
            <div className="">{tabs[activeTab].content}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
