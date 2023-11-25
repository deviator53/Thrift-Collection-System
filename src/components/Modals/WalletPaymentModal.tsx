import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PayButton from "../PayButton";

const WalletPaymentModal = (props: { isOpen: any; isClose: any }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(0);
  const [email, setEmail] = useState<string>("");


  function openModal() {
    setIsOpen(true);
  }

  function isClose() {
    setIsOpen(false);
  }

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
                            Fund Wallet
                          </h2>
                          <div className="my-4">
                            <p className="py-2 font-semibold">Email</p>
                            <input
                              className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              required
                              type="email"
                              name="email"
                              placeholder="Enter Email"
                              value={email}
                              onChange={(e)=>setEmail(e.target.value)}

                            />
                          </div>
                        
                          <div className="my-6">
                            <p className="font-semibold text-lg my-2">
                              Amount
                            </p>
                            <input
                              className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              required
                              type="text"
                              name="amount"
                              value={amount}
                              onChange={(e) => setAmount(Number(e.target.value))}
                              placeholder="Enter Amount"
                            />
                          </div>

                          <div className="flex justify-center">
                            <PayButton amount={amount} email={email} />
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

export default WalletPaymentModal;
