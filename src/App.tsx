import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Guarantor from './pages/Guarantor';
import Layout from './pages/Layout';
import Login from './pages/Login';
import User from './pages/User';
import Users from './pages/Users';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<User/>} />
          <Route path="guarantors" element={<Guarantor/>} />
        </Route>
      </Routes>
     </BrowserRouter>
  );
}

export default App;
