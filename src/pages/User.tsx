import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserState } from "../redux/types";

const User: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserState | null>(null);
  const [error, setError] = useState(null);

  let { userId } = useParams();

  const url = `https://thrift-collection-system-server.vercel.app/users/${userId}`;

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setUser(json);
      console.log("redux data", json);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userId]);

  const calculateTotalSavings = (user: UserState): number => {
    return user.savings.reduce((total, savings) => total + savings.amount, 0);
  };

  const calculateTotalLoans = (user: UserState): number => {
    return user.loans.reduce((total, loans) => total + loans.amount, 0);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center w-screen h-screen text-3xl font-semibold">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="p-7">
        <h2 className="text-2xl font-bold my-4">User Details</h2>
        <div className="p-8 bg-white shadow-md rounded-md">
          {user ? (
            <>
              <div className="grid grid-cols-2 gap-2 my-4">
                <div className="my-2">
                  <p className="text-sm my-2 font-bold">Name</p>
                  <p className="text-lg text-[#656565] my-2">
                    {user.info.firstName} {user.info.lastName}
                  </p>
                </div>
                <div className="my-2">
                  <p className="text-sm my-2 font-bold">Number</p>
                  <p className="text-lg text-[#656565] my-2">
                    {user.info.phoneNumber}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 my-4">
                <div className="my-2">
                  <p className="text-sm my-2 font-bold">Email</p>
                  <p className="text-lg text-[#656565] my-2">
                    {user.info.email}
                  </p>
                </div>
                <div className="my-2">
                  <p className="text-sm my-2 font-bold">Wallet Balance</p>
                  <p className="text-lg text-[#656565] my-2">
                    {user.wallet.balance.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 my-4">
                <div className="my-2">
                  <p className="text-sm my-2 font-bold">Loans</p>
                  <p className="text-lg text-[#656565] my-2">
                    {calculateTotalSavings(user).toLocaleString()}
                  </p>
                </div>
                <div className="my-2">
                  <p className="text-sm my-2 font-bold">Loans</p>
                  <p className="text-lg text-[#656565] my-2">
                    {calculateTotalLoans(user).toLocaleString()}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <p className="p-4 text-lg font-semibold">No user Found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default User;
