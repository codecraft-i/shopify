import React, { useEffect } from "react";

// Components
import Home from "./components/Home/Home";

// Liblaries
import { Routes, Route } from 'react-router-dom';

// Components

// import { initializeTabs } from './initializetabs.js';
import { basicMevents } from './basicmevents.js';

import About from "./components/templates/AboutsP/About.js";
import DiscountsAll from "./components/templates/DiscountsAll/DiscountsAll.js";
import LikesP from './components/templates/FsHNav/LikesP.js';
import BasketP from './components/templates/FsHNav/BasketP.js';
import QuestionsAnswers from './components/templates/FsHNav/AnswerQ.js';

import Profile from "./components/templates/ProfilesRL/Profile.js";
import ProAdd from "./components/templates/ProfilesRL/ProAdd.js";
import ProMarket from "./components/templates/ProfilesRL/ProMarket.js";
import ProChart from "./components/templates/ProfilesRL/ProChart.js";
import ProPay from "./components/templates/ProfilesRL/ProPay.js";


function App() {
  useEffect(() => {
    basicMevents();
  }, []);
  return (
    <div className="App">
        <div className="main-container">
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/discount" element={ <DiscountsAll /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/questions-answers" element={ < QuestionsAnswers /> } />
            <Route path="/likes" element={ <LikesP /> } />
            <Route path="/basket" element={ <BasketP /> } />

            <Route path="/profile/dashboard" element={ <Profile /> } />
            <Route path="/profile/market" element={ < ProMarket /> } />
            <Route path="/profile/address" element={ <ProAdd /> } />
            <Route path="/profile/charts" element={ <ProChart /> } />
            <Route path="/profile/pays" element={ <ProPay /> } />
          </Routes>
        </div>
    </div>
  );
}

export default App;
