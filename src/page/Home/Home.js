import React, { useEffect, useState } from 'react'; 
import "./Home.css"; 
import array from '../../Array';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import AnimatedSection from '../../AnimatedSection';
import { useTranslation } from 'react-i18next';
import Footer from '../Footer/Footer';


export default function Home() {
  var backgroundImage = ["https://th.bing.com/th/id/R.d8d8997d0ccdcba04aabb8541f27316c?rik=hIH3X%2bN8Wcd0Qg&pid=ImgRaw&r=0", 
    "https://i0.wp.com/shesfluent.com/wp-content/uploads/2020/11/journal-blog-pic-1.jpg?resize=2048%2C1152&ssl=1", 
    "https://www.travel.taipei/image/270215/?r=1654596705583" , 
    "https://www.coachfinder.nl/wp-content/uploads/2021/06/Online-programma-online-coachen-2.jpg"  
   ] ; 


   
   var [Index, setIndex] = useState(0) ;
   var [arrayToShow , setArrayToShow] = useState(array) ; 
     const { t } = useTranslation();
   
   
   useEffect(() => {
    const interval = setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % backgroundImage.length);
    }, 5000);

    return () => clearInterval(interval);
}, []);



    useEffect(()=>{
      window.scrollTo(0,0);   
    },[])



  return (    <div>

  <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.737)), url(${backgroundImage[Index]})` }}  class="landing">
    <div class="intro-text">

    <AnimatedSection>
      <h1 className="TextInHeaderHomePageH1"> {t('NameLogo')}   </h1>
      <p className="TextInHeaderHomePage"> {t('TextInHomeHeader')}
      </p>
      </AnimatedSection>
    </div>
  </div>

<div className="allDivCarded">
  <AnimatedSection>
      <h1 style={{textAlign:"center"}} className='TextInShowCard'>{t('chose')}</h1>
  </AnimatedSection>
    
    <div className="AllCard" >

    {arrayToShow.map(function(ele, index) { 

    return (
      <AnimatedSection>
        <Card arr={ele} key={index} /> 
      </AnimatedSection>
        ); 
    })}

    </div>
    <Link to={"/AllMaterial"}>
    <AnimatedSection>
    <button className='ShowAllMaterialButton'>{t('ShowAllMaterial')}</button>
    </AnimatedSection>
    </Link>
    </div>




    <Footer/>


  </div>

  )
}
