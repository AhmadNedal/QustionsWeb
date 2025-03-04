import React, { useEffect } from 'react'
import array from '../../Array';
import { Link } from 'react-router-dom';
import "./ShowPage.css" ; 
import i18n from "i18next";

export default function ShowPage() {
  var Id = localStorage.getItem("IdShow") ;
  var CheckLocal = sessionStorage.getItem("check"); 


  return (
    <div className="containerShow">
      <h1 style={{textAlign:"center"}} className="title">{i18n.language=="ar"?array[Id].name:array[Id].nameen}</h1>
      <div className="button-container">
        <a target='_blank' href={array[Id].summary} className="button2">ملخص للمادة</a>
        <a target='_blank' href={array[Id].book} className="button2">السلايدات</a>
        <Link  className=" button2 ButtonToQustions full-width" to =  { CheckLocal ==null ?"/check" : "/Qustions" }>
        <button href='#' className="full-width">اختبر نفسك</button>
        </Link>
      </div>
    </div>

      
  )
}
