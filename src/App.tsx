import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { useSelector } from 'react-redux';
import Dashboard from './pages/Dashboard';
import Guarantor from './pages/Guarantor';
import Layout from './pages/Layout';
import Login from './pages/Login';
import User from './pages/User';
import Users from './pages/Users';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Loans from './pages/SidebarComponents/Loans';
import Savings from './pages/SidebarComponents/Savings';
import LoanRequest from './pages/SidebarComponents/LoanRequest';
import FeesAndCharges from './pages/SidebarComponents/FeesAndCharges';
import Transaction from './pages/SidebarComponents/Transaction';
import Services from './pages/SidebarComponents/Services';
import Preference from './pages/SidebarComponents/Preference';
import { RootState } from './redux/types';
import PageNotFound from './pages/PageNotFound';



function App() {
  const loggedInUser = useSelector((state: RootState) => state.users.loggedInUser);

  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route element={<PrivateRoute />}>

        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard  loggedUser={loggedInUser} />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<User />} />
          <Route path="loans" element={<Loans loggedUser={loggedInUser} />} />
          <Route path="loan" element={<LoanRequest loggedUser={loggedInUser} />} />
          <Route path="fees" element={<FeesAndCharges loggedUser={loggedInUser} />} />
          <Route path="transactions" element={<Transaction loggedUser={loggedInUser} />} />
          <Route path="services" element={<Services loggedUser={loggedInUser} />} />
          <Route path="preferences" element={<Preference loggedUser={loggedInUser} />} />
          <Route path="savings" element={<Savings loggedUser={loggedInUser}/>} />
        </Route>
</Route>
      </Routes>
  );
}

export default App;
