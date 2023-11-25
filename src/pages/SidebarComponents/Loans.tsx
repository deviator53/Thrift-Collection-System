import React, { useState } from 'react';
import Agriculture from "../../images/Farming.jpg";
import Home from "../../images/Home.jpg";
import School from "../../images/University.jpg";
import LoanModal from "../../components/Modals/LoanModal"
import { UserState } from '../../redux/types';

const Loans: React.FC<{ loggedUser: UserState }> = ({loggedUser}) => {
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
        <div>
        <div className="flex flex-wrap gap-7">
          <button onClick={openModal} className="w-[240px] h-[240px] bg-white hover:border hover:border-[#39CDCC] shadow-md">
            <div className="p-6">
              <div className="w-[200px] h-[150px]">
                <img
                  src={Agriculture}
                  alt="agricIcon"
                  className="w-full h-full object-fit"
                />
              </div>
              <p className="ml-2 font-semibold text-center text-lg text-[#213F7D]">Agriculture Loan</p>
            </div>
          </button>

          <button onClick={openModal} className="w-[240px] h-[240px] bg-white hover:border hover:border-[#39CDCC] shadow-md">
            <div className="p-6">
              <div className="w-[200px] h-[150px]">
                <img
                  src={Home}
                  alt="homeIcon"
                  className="w-full h-full object-fit"
                />
              </div>
              <p className="ml-2 font-semibold text-center text-lg text-[#213F7D]">
                Housing Loan
              </p>
            </div>
          </button>

          <button onClick={openModal} className="w-[240px] h-[240px] bg-white hover:border hover:border-[#39CDCC] shadow-md">
            <div className="p-6">
              <div className="w-[200px] h-[150px]">
                <img
                  src={School}
                  alt="schoolIcon"
                  className="w-full h-full object-fit"
                />
              </div>
              <p className="ml-2 font-semibold text-center text-lg text-[#213F7D]">
                School Loan
              </p>
            </div>
          </button>
        </div>
        </div>
    </div>
    <LoanModal isOpen={isOpen} isClose={isClose} />
    </>
  )
}

export default Loans