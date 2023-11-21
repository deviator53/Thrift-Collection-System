import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';

const PayButton = (props: { amount: number, email: string }) => {
  const publicKey = "pk_test_3a9226e8c4f8f3e5636cd532512014594df10b73";
  // const [reference, setReference] = useState<string>("");

  // const handlePaystackSuccessAction = (reference: string) => {
  //   window.location.href = `https://paystack.com/pay/${publicKey}/${reference}`;
  // }
  const handlePaystackButtonClick: React.MouseEventHandler<HTMLButtonElement>  = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Other logic if needed
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

  return ( <button onClick={handlePaystackButtonClick}><PaystackButton {...componentProps}  /></button>);
};

export default PayButton;
