import React from 'react';
import Agriculture from "../../images/Farming.jpg";
import Home from "../../images/Home.jpg";
import School from "../../images/University.jpg";

const Loans: React.FC = () => {
  return (
    <>
    <div>
        <div>
        <div className="flex flex-wrap gap-7">
          <div className="w-[240px] h-[240px] bg-white shadow-md">
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
          </div>

          <div className="w-[240px] h-[240px] bg-white shadow-md">
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
          </div>

          <div className="w-[240px] h-[240px] bg-white shadow-md">
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
          </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Loans