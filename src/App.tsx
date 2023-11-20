import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<User/>} />
          <Route path="loans" element={<Loans />} />
          <Route path="loan" element={<LoanRequest />} />
          <Route path="fees" element={<FeesAndCharges />} />
          <Route path="transactions" element={<Transaction />} />
          <Route path="services" element={<Services />} />
          <Route path="preferences" element={<Preference />} />
          <Route path="savings" element={<Savings/>} />
          <Route path="guarantors" element={<Guarantor/>} />
        </Route>
      </Routes>
     </BrowserRouter>
  );
}

export default App;
