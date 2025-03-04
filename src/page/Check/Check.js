import React, { useState } from 'react'
import "./Check.css";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



var arr = [ "AWaM87" , "AwWrE7", "XOAuiI" , "AAasS5" , "yYaT250" , "HaMaSS87", "ASeEwA62" , "Ew0XRp2"  ];
var num = Math.floor(Math.random() * arr.length);

export default function Check() {
  const navigate = useNavigate();
  var [textCheck ,setTextCheck] = useState(""); 
  var [textHint , setTextHint ] = useState(""); 
  const { t } = useTranslation();
  


  return(
    <div className='AllContentInCheckPerosn'>

      <h1 style={{marginTop:"33px" , fontSize:"30px" ,fontWeight:"bolder" }}>{t("verify")}</h1>

      <h6 style={{marginTop:"27px" ,fontSize:"11px" }}>{t("Enter")}</h6>
      <h6 style={{fontSize:"27px" , marginBottom:"9px", marginTop:"6px"}}> {arr[num]} </h6>
      <input style={{textAlign:"center" , border:"1px solid black  " , borderRadius:"8px"}} onChange={(e)=> { 
          setTextCheck(e.target.value); 
      }} type="text" placeholder={t("write")} />
      
      <button className='ButtonCheckPerson' onClick={()=> { 
          
          if ( textCheck == arr[num]) {
            sessionStorage.setItem("check" , "YES") ; 
            setTextHint("جاري التحميل ....") ;
            navigate("/Qustions");
            

          }else {
            setTextHint(t("Correct"))
          }
          
      }}> {t("TheVerify")} </button>

      <h6 className='HintCheckPerson'>{textHint}</h6>
    </div>
  )
}
