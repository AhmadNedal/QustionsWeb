import React, { useEffect, useState } from 'react'
import { AllMaterialArray } from '../../Array'; 
import Card from '../Card/Card';
import "./AllMaterial.css"; 
import AnimatedSection from '../../AnimatedSection';
import { useTranslation } from 'react-i18next';
import i18n from "i18next";


export default function AllMaterial() {
  var [AllMaterialArrayShow  , setAllMaterialArrayShow ] = useState(AllMaterialArray);   
     const { t } = useTranslation();

  useEffect(()=>{
    window.scrollTo(0,0);   
  },[]) ;


  return (
    <div className="BackgroundC">    
    <div className='AllContentInAllMaterial'>
    <input className='BtnSearch' onChange={(e)=>{ 
        var ele = document.getElementById("AllCC") ;
      if  (e.target.value.trim() == "") {
        ele.classList.remove("Down") ; 
      }else {
        ele.classList.add("Down") ; 

      }
        
    var newArray = AllMaterialArray.filter((ele)=>{
      var nn  = (i18n.language == "ar" ? ele.name : ele.nameen ); 
      return nn.trim().toLocaleLowerCase().includes(e.target.value.trim().toLocaleLowerCase() );
    }); 
    setAllMaterialArrayShow(newArray) ;
}} type="text" placeholder= {t("search") }/>


<div id='AllCC' className="AllCard" >

  {AllMaterialArrayShow.map(function(ele,index) { 
    return (
    <AnimatedSection>
      <Card arr={ele} key={index} /> 
      </AnimatedSection>
      );
    })}

</div>      
</div>


    </div>
  )
}
