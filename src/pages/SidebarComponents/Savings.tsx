import React, { useState } from "react";
import SavingsIcon from "../../images/savings-icon.png";
import SavingsPaymentModal from "../../components/Modals/SavingsPaymentModal";
import SavingsTable from "../../components/SavingsTable";
// import SavingsPaymentModal from "../../components/SavingsPaymentModal";

const Savings = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  function openModal() {
        setIsOpen(true);
    }

  function isClose() {
        setIsOpen(false);
    }
  return (
    <>
      <div>
        <div className="flex gap-6 flex-wrap">
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
                ₦102,453
              </p>
            </div>
          </div>
          <button onClick={openModal} className="w-[240px] h-[160px] border border-[#213F7D] border-dotted">
            <div className="p-6 flex items-center justify-center h-full gap-3">
              <div className="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="rgba(33,63,125,1)"></path></svg>
              </div>
              <p className="ml-2 font-semibold text-lg text-[#213F7D]">
                Create Saving Plan
              </p>
            </div>
          </button>
        </div>
        <div className="p-4 bg-white my-4">
          <SavingsTable />
        </div>
      </div>
      <SavingsPaymentModal isOpen={isOpen} isClose={isClose} />

    </>
  );
};

export default Savings;
