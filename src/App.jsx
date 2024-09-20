import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import "./App.css";
import Settings from "./pages/settings";
import BankInformation from "./pages/settings/components/BankInformation";
import PasswordSettings from "./pages/settings/components/PasswordSettings";
import Clients from "./pages/clients";
import Transactions from "./pages/transactions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/settings/personal-information" element={<Settings />} />
        <Route
          path="/settings/bank-information"
          element={<BankInformation />}
        />
        <Route
          path="/settings/password-details"
          element={<PasswordSettings />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
