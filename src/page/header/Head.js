import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Form } from "react-router-dom";

import "./Header.css"; 
import i18n from "i18next";
import { useTranslation } from 'react-i18next';




function Head() {


  const { t } = useTranslation();
  
document.onclick = function(e){
  const ele = document.getElementById("hovver");
  if ( e.target.classList[0] == "links" || e.target.classList[0] == "icon" ) { 
    if (ele.style.display == "none" ){
      ele.style.display= "block";
      }else {
      ele.style.display= "none";
    }    
  }else {
   ele.style.display= "none";    
  }
}

  return (
      
    <div class="header">
      <div class="container">
        <Link to={"/"}>
        
        <img
          class="logo"
          src={require("../../images/logo.png")}
          alt=""
        />
        </Link>
      <div className="iconn">
    
    
      <div className="IconHeader">
      <i 
        onClick={()=> {

          var Theme = localStorage.getItem("Theme") ; 

            if(Theme=="Dark") {
                document.documentElement.style.setProperty("--black", "#151313"); 
                document.documentElement.style.setProperty("--white", "#fff"); 
                document.documentElement.style.setProperty("--cardColor", "#fff"); 
                document.documentElement.style.setProperty("--blackSmall", "#edd9d9"); 
                document.documentElement.style.setProperty("--TextCardColor", "#6a5757"); 

                localStorage.setItem("Theme", "Light")
            }else {
                document.documentElement.style.setProperty("--black", "#fff"); 
                document.documentElement.style.setProperty("--white", "#151313"); 
                document.documentElement.style.setProperty("--cardColor", "#3a3232"); 
                document.documentElement.style.setProperty("--blackSmall", "#2a2525"); 
                document.documentElement.style.setProperty("--TextCardColor", "#e7dede"); 

                localStorage.setItem("Theme", "Dark")
            }
        }}

      className="fa-solid fa-circle-half-stroke IconTheme"></i>

      <i class="fa-solid fa-globe IconTheme" onClick={()=>{ 
            if ( i18n.language == "ar") { 
              i18n.changeLanguage("en");
            }else {
              i18n.changeLanguage("ar");
            }

      }}></i>
      

      </div>

      </div>

        <div class="links">
          <span  class="icon">
            <span className="icon"></span>
            <span className="icon"></span>
            <span className="icon"></span>
          </span>
          <ul style={{display:"none"}} id="hovver">
            <li>
              <a href="#">
                <Link to="/">{t("Home")}</Link>
              </a>
            </li>

            <li>
              <a href="#">
                <Link to="/AllMaterial">{t("AllMaterial")}</Link>
              </a>
            </li>

            <li>
              <a href="#">
                <Link to="/ContactUs">{t("ContactUs")}</Link>
              </a>
            </li>

          </ul>
        </div>
      </div>

    </div>
  );
}



export default Head;
