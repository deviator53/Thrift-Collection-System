import React, { useState, useEffect } from "react";
import UserIcon from "../images/user-icon.png";
import LoanIcon from "../images/loans-icon.png";
import SavingsIcon from "../images/savings-icon.png";
import AllTransactionTable from "../components/Transactions/AllTransactionTable";
import CreditTransactionTable from "../components/Transactions/CreditTransactionTable";
import DebitTransactionTable from "../components/Transactions/DebitTransactionTable";
import { UserState } from "../redux/types";

type User = {
  id: string;
  orgName: string;
  userName: string;
  phoneNumber: string;
  email: string;
  createdAt: string;
  status: string;
};



const Dashboard: React.FC<{ loggedUser: UserState }> = ({loggedUser}) => {
  console.log("dashboard user", loggedUser);

  const [tab, settab] = useState<string>("all");

  useEffect(() => {
    const url = "https://thrift-collection-system-server.vercel.app/users";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log("redux data",json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
}, []);

const calculateTotalSavings = (loggedUser: UserState): number => {
  return loggedUser.savings.reduce((total, savings) => total + savings.amount, 0);
  };

  const calculateTotalLoans = (loggedUser: UserState): number => {
    return loggedUser.loans.reduce((total, loans) => total + loans.amount, 0);
    };


  return (
    <>
      <div className="p-5">
        <h2 className="text-[#213F7D] text-2xl font-semibold my-3">Dashboard</h2>
        <div className="flex flex-wrap gap-7">
          <div className="w-[240px] h-[160px] bg-white shadow-md">
            <div className="p-6">
              <div className="w-[50px] h-[50px]">
                <img
                  src={UserIcon}
                  alt="userIcon"
                  className="w-full h-full object-fit"
                />
              </div>
              <p className="ml-2 my-2 text-[#545F7D]">{loggedUser.info.firstName} {loggedUser.info.lastName}</p>
              <p className="ml-2 font-semibold text-lg text-[#213F7D]">3023378292</p>
            </div>
          </div>

          <div className="w-[240px] h-[160px] bg-white shadow-md">
            <div className="p-6">
              <div className="w-[50px] h-[50px]">
                <img
                  src={LoanIcon}
                  alt="userIcon"
                  className="w-full h-full object-fit"
                />
              </div>
              <p className="ml-2 my-2 text-[#545F7D]">LOANS</p>
              <p className="ml-2 font-semibold text-lg text-[#213F7D]">
              ₦{calculateTotalLoans(loggedUser).toLocaleString()}
              </p>
            </div>
          </div>

          <div className="w-[240px] h-[160px] bg-white shadow-md">
            <div className="p-6">
              <div className="w-[50px] h-[50px]">
                <img
                  src={SavingsIcon}
                  alt="userIcon"
                  className="w-full h-full object-fit"
                />
              </div>
              <p className="ml-2 my-2 text-[#545F7D]">SAVINGS</p>
              <p className="ml-2 font-semibold text-lg text-[#213F7D]">
              ₦{ calculateTotalSavings(loggedUser).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[40px] pb-[100px]">
          <div className="w-full h-full  rounded-md shadow-md p-4 bg-white">
            <p className="text-[#213F7D] text-lg font-semibold my-4">Transaction History</p>
          <div className="flex gap-x-[24px] my-4 border-b border-b-[#efeff4]">
            <p
              onClick={() => {
                settab("all");
              }}
              className={`text-[14px] pb-2 cursor-pointer ${
                tab === "all"
                  ? "text-[#39CDCC] border-b border-b-[#39CDCC] "
                  : "#8d98af"
              } `}
            >
              All
            </p>
            <p
              onClick={() => {
                settab("credit");
              }}
              className={`text-[14px] pb-2 cursor-pointer ${
                tab === "credit"
                  ? "text-[#39CDCC] border-b border-b-[#39CDCC] "
                  : "#8d98af"
              } `}
            >
              Credit
            </p>
            <p
              onClick={() => {
                settab("debit");
              }}
              className={`text-[14px] pb-2 cursor-pointer ${
                tab === "debit"
                  ? "text-[#39CDCC] border-b border-b-[#39CDCC] "
                  : "#8d98af"
              } `}
            >
              Debit
            </p>
          </div>
          <div className="my-4">
          {tab === "all" && (
            <AllTransactionTable loggedUser={loggedUser} />
          )}
          {tab === "credit" && (
            <CreditTransactionTable loggedUser={loggedUser} />
          )}
          {tab === "debit" && (
            <DebitTransactionTable loggedUser={loggedUser} />
          )}
        </div>
           
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Dashboard;
