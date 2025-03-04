import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Head from './page/header/Head';
import Home from './page/Home/Home';
import AllMaterial from './page/AllMaterial/AllMaterial';
import ContactUs from './ContactUs/ContactUs';
import ShowPage from './page/ShowPage/ShowPage';
import Check from './page/Check/Check';
import Qustions from './page/Qustions/Qustions';
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from './i18next';

function App() {

  document.title = "Studey" ; 
  var Theme = localStorage.getItem("Theme"); 

  if(Theme== null) { 
    localStorage.setItem("Theme", "Light");
  }else {
    if ( Theme == "Light") {
      document.documentElement.style.setProperty("--black", "#000000"); 
      document.documentElement.style.setProperty("--white", "#fff"); 
      document.documentElement.style.setProperty("--cardColor", "#fff"); 
      document.documentElement.style.setProperty("--blackSmall", "#edd9d9"); 
      document.documentElement.style.setProperty("--TextCardColor", "#6a5757"); 

    }else {
      document.documentElement.style.setProperty("--black", "#fff"); 
      document.documentElement.style.setProperty("--white", "#151313"); 
      document.documentElement.style.setProperty("--cardColor", "#3a3232");
      document.documentElement.style.setProperty("--blackSmall", "#2a2525"); 
      document.documentElement.style.setProperty("--TextCardColor", "#e7dede"); 

    }
  }

  const { t } = useTranslation();

  return (
    <Router>
      <div className='Aa'>

        <Head/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AllMaterial" element={<AllMaterial />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/ShowPage" element={<ShowPage />} />
          <Route path="/Qustions" element={<Qustions />} />
          <Route path="/Check" element={<Check />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
