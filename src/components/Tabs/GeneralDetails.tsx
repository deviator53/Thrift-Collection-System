import React from "react";
import { UserData } from "../../pages/User";

const GeneralDetails = (props: { data: UserData }) => {
  return (
    <>
      <div>
        <p className="text-xl text-[#213F7D] font-semibold mb-4">
          Personal Information
        </p>
        <div>
          <div className="flex flex-col gap-5 divide-y">
            <div className="flex flex-wrap gap-[80px]">
              <div>
                <p className="text-sm text-[#545F7D] mb-2">FULL NAME</p>
                <p className="text-xl text-[#545F7D]">
                  {props.data.profile.firstName} {props.data.profile.lastName}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#545F7D] mb-2">PHONE NUMBER</p>
                <p className="text-xl text-[#545F7D]">
                  {props.data.phoneNumber}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#545F7D] mb-2">EMAIL ADDRESS</p>
                <p className="text-xl text-[#545F7D]">{props.data.email}</p>
              </div>
              <div>
                <p className="text-sm text-[#545F7D] mb-2">BVN</p>
                <p className="text-xl text-[#545F7D]">
                  {props.data.profile.bvn}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#545F7D] mb-2">GENDER</p>
                <p className="text-xl text-[#545F7D]">
                  {props.data.profile.gender}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#545F7D] mb-2">MARITAL STATUS</p>
                <p className="text-xl text-center text-[#545F7D]">-</p>
              </div>
              <div>
                <p className="text-sm text-[#545F7D] mb-2">CHILDREN</p>
                <p className="text-xl text-center text-[#545F7D]">-</p>
              </div>
              <div>
                <p className="text-sm text-[#545F7D] mb-2">TYPE OF RESIDENCE</p>
                <p className="text-xl text-center text-[#545F7D]">-</p>
              </div>
            </div>

            <div>
              <p className="text-xl text-[#213F7D] font-semibold my-4">
                Education and Employment
              </p>
              <div className="flex flex-wrap gap-[80px]">
                <div>
                  <p className="text-sm text-[#545F7D] mb-2">
                    LEVEL OF EDUCATION
                  </p>
                  <p className="text-xl  text-[#545F7D]">
                    {props.data.education.level}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#545F7D] mb-2">
                    EMPLOYMENT STATUS
                  </p>
                  <p className="text-xl text-[#545F7D]">
                    {props.data.education.employmentStatus}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#545F7D] mb-2">
                    SECTOR OF EMPLOYMENT
                  </p>
                  <p className="text-xl text-[#545F7D]">
                    {props.data.education.sector}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#545F7D] mb-2">
                    DURATION OF EMPLOYMENT
                  </p>
                  <p className="text-xl text-[#545F7D]">
                    {props.data.education.duration}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#545F7D] mb-2">OFFICE EMAIL</p>
                  <p className="text-xl text-[#545F7D]">
                    {props.data.education.officeEmail}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#545F7D] mb-2">MONTHLY INCOME</p>
                  <p className="text-xl text-[#545F7D]">
                    {props.data.education.monthlyIncome[1]} -{" "}
                    {props.data.education.monthlyIncome[0]}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#545F7D] mb-2">LOAN REPAYMENT</p>
                  <p className="text-xl text-[#545F7D]">
                    {props.data.education.loanRepayment}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xl text-[#213F7D] font-semibold my-4">
                Socials
              </p>
              <div className="flex flex-wrap gap-[80px]">
                <div>
                  <p className="text-sm text-[#545F7D] mb-2">TWITTER</p>
                  <p className="text-xl text-[#545F7D]">
                    {props.data.socials.twitter}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#545F7D] mb-2">FACEBOOK</p>
                  <p className="text-xl text-[#545F7D]">
                    {props.data.socials.twitter}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#545F7D] mb-2">INSTAGRAM</p>
                  <p className="text-xl text-[#545F7D]">
                    {props.data.socials.instagram}
                  </p>
                </div>
              </div>
                      </div>
                      <div>
                      <p className="text-xl text-[#213F7D] font-semibold my-4">
                Guarantor
              </p>
                          <div className="flex flex-wrap gap-[80px]">
                          <div>
                  <p className="text-sm text-[#545F7D] mb-2">FULL NAME</p>
                  <p className="text-xl text-[#545F7D]">
                    {props.data.guarantor.firstName} {props.data.guarantor.lastName}
                  </p>
                              </div>
                              <div>
                  <p className="text-sm text-[#545F7D] mb-2">PHONE NUMBER</p>
                  <p className="text-xl text-[#545F7D]">
                    {props.data.guarantor.phoneNumber}
                  </p>
                              </div>
                              <div>
                  <p className="text-sm text-[#545F7D] mb-2">ADDRESS</p>
                  <p className="text-xl text-[#545F7D]">
                    {props.data.guarantor.address}
                  </p>
                              </div>
                              <div>
                  <p className="text-sm text-[#545F7D] mb-2">RELATIONSHIP</p>
                  <p className="text-xl text-center text-[#545F7D]">
                    -
                  </p>
                </div>
                              
              </div>
                      </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default GeneralDetails;
