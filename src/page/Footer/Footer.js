import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import i18n from "i18next";
import { useTranslation } from "react-i18next";


function Footer() {
  const [language, setLanguage] = useState("ar");
  const { t } = useTranslation();

  const toggleLanguage = () => {
    if ( i18n.language == "ar") { 
      i18n.changeLanguage("en");
    }else {
      i18n.changeLanguage("ar");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>{t("Quick Links")}</h3>
          <ul>
            <li><Link to={"/"}>{t("Home")}</Link></li>
            <li><Link to={"/AllMaterial"}>{t("AllMaterial")}</Link></li>
            <li><Link to={"/ContactUs"}>{t("ContactUs")}</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>{t("ContactUs")}</h3>
          <p>Email: ahmadnedall80@gmail.com</p>
          <p>Phone: +962781399265</p>
        
        </div>

        <div className="footer-section">
          <h3>{t("Setting")}</h3>
          <button className="lang-btn" onClick={toggleLanguage}>
            {i18n.language === "ar" ? "تغيير اللغة إلى الإنجليزية" : "Switch to Arabic"}
          </button>

          
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {t("Save")}.</p>
      </div>
    </footer>
  );
}

export default Footer;
