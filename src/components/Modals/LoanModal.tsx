import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const LoanModal = (props: { isOpen: any; isClose: any }) => {
  const [loading, setLoading] = useState(false);
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  return (
    <>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.isClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[50%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-center">
                    <div className="w-[80%] h-[500px] overflow-y-auto rounded-lg bg-white">
                      <div className="p-8">
                        <form>
                          <h2 className="text-2xl font-bold text-center">
                            {" "}
                            Loan Form
                          </h2>
                          <div className="my-4">
                            <p className="py-2 font-semibold">BVN</p>
                            <input
                              className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              required
                              type="text"
                              name="bvn"
                              placeholder="Enter BVN"
                            />
                          </div>
                          <div className="my-4">
                            <p className="py-2 font-semibold">Title of Loan</p>
                            <input
                              className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              required
                              type="text"
                              name="bvn"
                              placeholder="Enter Title"
                            />
                          </div>
                          <div className="my-4">
                            <p className="py-2 font-semibold">
                              Purpose of Loan
                            </p>

                            <textarea
                              className="border p-4 resize-none w-full"
                              rows={6}
                              placeholder="Write your message..."
                            ></textarea>
                          </div>
                          <div className="my-6">
                            <p className="font-semibold text-lg my-2">
                              Attach Bank Statement
                            </p>
                            <div className="flex gap-2 items-center">
                              <div className="">
                                <input id="fileInput" type="file" multiple />
                              </div>
                            </div>
                          </div>
                          <div className="my-6">
                            <p className="font-semibold text-lg my-2">
                              Select Loan Amount
                            </p>

                            <FormGroup>
                              <FormControlLabel
                                control={<Checkbox />}
                                label="₦500,000 (5% interest rate for 12 months)"
                              />

                              <FormControlLabel
                                control={<Checkbox />}
                                label="₦1,000,000 (9% interest rate for 12 months)"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="₦3,000,000 (12% interest rate for 12 months)"
                              />
                              <FormControlLabel
                                control={<Checkbox />}
                                label="₦5,000,000 (20% interest rate for 12 months)"
                              />
                            </FormGroup>
                          </div>
                          <div className="flex justify-center">
                            <button
                              type="submit"
                              className="py-2 px-6 justify-center rounded-md bg-[#39CDCC] hover:bg-black text-white text-lg"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default LoanModal;
