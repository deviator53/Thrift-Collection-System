import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';

const PayButton = (props: { amount: number, email: string }) => {
  const publicKey = "pk_test_3a9226e8c4f8f3e5636cd532512014594df10b73";
  
  const handlePaystackButtonClick: React.MouseEventHandler<HTMLButtonElement>  = (e) => {
    e.preventDefault(); 
  };

  const componentProps = {
    email: props.email,
    amount: props.amount * 100,
    publicKey,
    text: 'Pay Now',
    onSuccess: (reference:string) => {
      alert(
        `Your purchase was successful! `
      )},
    onClose: () => alert('Payment canceled by user.'),
  };

  return ( <button onClick={handlePaystackButtonClick}><PaystackButton className="py-2 px-4 rounded-md bg-[#39CDCC] text-white hover:bg-black" {...componentProps}  /></button>);
};

export default PayButton;
