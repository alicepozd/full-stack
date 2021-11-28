import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css';

import Home from "./pages/Home"
import Booking from "./pages/Booking"
import Clubs from "./pages/Clubs"
import Account from "./pages/Account"

function App() {
  return (
    <div className="background">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/clubs" element={<Clubs />} />
                <Route path="/personal_account" element={<Account />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
