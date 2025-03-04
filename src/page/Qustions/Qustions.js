import React, { use, useEffect, useState } from 'react';
import "./Qustions.css"; 
import { Link, useNavigate } from 'react-router-dom';
import QustionsArray from '../../Qustions';



export default function Qustions() {
  
  useEffect(()=>{
    window.scrollTo(0,0);   
  },[])
  
    var Idd =  localStorage.getItem("IdShow"); 
    var [idx, setIdx] = useState(0) ; 
    var [score, setScore] = useState(0) ; 
    var [HintSellect , setHintSellect ] = useState(false ) ; 
    var [bool , setBool ] = useState(false ) ; 
    var [bool2 , setBool2 ] = useState(false ) ; 
    var [select , setSellect ] = useState(-1) ;
    var [TimeSubmit,setTimeSubmit] = useState([]) ;    
    var [arrayOAns, setArrayOAns] = useState([]); 
    var [ShowAnswer, setShowAnswer] = useState(false) ;
    let index =0 ; 
    var [time,setTime] =  useState(10) ; 
    var [startTime , setStartTime ] = useState(false) ; 


    const [positionImg, setPositionImg] = useState(0);
    const [positiontImgt, setPositiontImgt] = useState(0);
    const [posImg2, setPosImg2] = useState(-200);
    var [windowHeight , setwindowHeight] = useState(window.innerWidth) ; 
    var [windowWidth , setwindowWidth] = useState(window.innerHeight) ; 
    var [graduationWidth, setGraduationWidth] = useState(window.innerWidth+30) ; 
    var [graduationHight, setGraduationHight] = useState(0) ; 
    var [openBook , setOpenBook] = useState(-300) ; 
  
    useEffect(()=>{ 
      setwindowWidth(()=>  { 
        return window.innerWidth
      });
      setwindowHeight(()=>  { 
        return window.innerHeight
      });
      windowHeight = window.innerHeight;
    },[window.innerHeight ,window.innerWidth ]);
  
    
    useEffect(() => {
      const interval = setInterval(() => {
        if (positionImg >= windowWidth || positiontImgt >= windowHeight) {
          var ele = document.getElementById("tran") ; 
          var elements = document.getElementsByClassName("tran") ; 
          Array.from(elements).forEach((ele) => {
            ele.style.opacity = 0;
          });
          ele.style.opacity =0  ; 
          setPositionImg(() =>-200);
          setPositiontImgt(() =>-100);
          setTimeout(() => {
            Array.from(elements).forEach((ele) => {
              ele.style.opacity = 1 ;
            });
          }, 5000);
        }
        setPositionImg((positionImg) => positionImg + 2);
        setPositiontImgt((prevPosition) => prevPosition + 1);
      },100);
      return () => clearInterval(interval);
    }, [positionImg, positiontImgt]);
  
  
    
    useEffect(() => {
  
        const interval = setInterval(() => {
          if (posImg2 >= windowWidth) {
            var elements = document.getElementsByClassName("posImg2") ; 
            Array.from(elements).forEach((ele) => {
              ele.style.opacity = 0;
            });
            setPosImg2(() =>-100);
            setTimeout(() => {
              Array.from(elements).forEach((ele) => {
                ele.style.opacity = 1 ;
              });
            }, 5000);
          }
          setPosImg2((prevPosition) => prevPosition + 1);
        },100);
        return () => clearInterval(interval);
  
  
    }, [posImg2]);
  
  
    
    useEffect(() => {
  
      const interval = setInterval(() => {
        if (graduationWidth <= -10 || graduationHight >= windowHeight) {
          var rr = document.getElementById("graduations") ; 
          rr.style.opacity = 0  ; 
          setGraduationWidth(() =>windowWidth);
          setGraduationHight(() =>0);
  
          setTimeout(() => {
          rr.style.opacity = 1; 
          }, 5000);
        }
        setGraduationHight((positionImg) => positionImg + 2);
        setGraduationWidth((prevPosition) => prevPosition -3);
      },100);
      return () => clearInterval(interval);
    }, [graduationHight,graduationWidth , setGraduationWidth , setGraduationHight]);
  
  
    
  
    
    useEffect(() => {
  
      const interval = setInterval(() => {
        if (openBook >= windowHeight) {
          var elements = document.getElementsByClassName("openBook") ; 
          Array.from(elements).forEach((ele) => {
            ele.style.opacity = 0;
          });
          setOpenBook(() =>-100);
          setTimeout(() => {
            Array.from(elements).forEach((ele) => {
              ele.style.opacity = 1 ;
            });
          }, 5000);
        }
        setOpenBook((prevPosition) => prevPosition + 1);
      },100);
      return () => clearInterval(interval);
  
  
  }, [openBook]);
  
  
  
    const getRandomIndices = (length) => {
      return Array.from({ length }, (_, i) => i).sort(() => Math.random() - 0.5);
    };

    
    var [arrayIndex, setArrayOfIndex] = useState(getRandomIndices(QustionsArray[Idd].length)); 


    useEffect(() => {

      if (time <= 0){
        setBool(false ); 
        setBool2(true) ;
       return;
      }
  
      const timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
  
      return () => clearTimeout(timer);
    }, [time, startTime]);

  const style =  {
    color: "red" , 
    fontSize:"20px" , 
    fontWeight :"bold"
  }


  

    return (
    <div style={{zIndex:"1"}} className='AllContentInQustionsPage'>

<i id='tran'
      style={{
        fontSize:`33px`,
        position: 'relative',
        left: `${positionImg}px`,
        top :`${positiontImgt}px`,
       transition: 'left 0.6s ease-in-out, top 0.6s ease-in-out'
      }}
      class="fas fa-pen tran Icon"></i>

      <i style={{
        fontSize:`33px`,
        position: 'relative',
        left: "50%",
        top : `${openBook}px`,
       transition: 'left 0.6s ease-in-out, top 0.6s ease-in-out'
      }}
      
      class="fas fa-book-open openBook Icon"></i>
      
      <i style={{
        fontSize:`33px`,
        position: 'relative',
        left: `${posImg2}px`,
        top : "40%",
       transition: 'left 0.6s ease-in-out, top 0.6s ease-in-out'
      }} class="fas fa-lightbulb posImg2 Icon"></i>

      <i style={{
        fontSize:`33px`,
        position: 'relative',
        left: `${graduationWidth}px`,
        top: `${graduationHight}px`,
       transition: 'left 0.6s ease-in-out, top 0.6s ease-in-out'
      }}  id='graduations' class="fa-solid fa-graduation-cap graduations Icon"></i>  
      
       { bool ? (
        <div className="quiz-container cont">
        <div className="quiz-box cont">
          <h4 style={{color:"red" , fontWeight:"600" , }} >{`${Math.floor(time/60)} :${String(time % 60).padStart(2, "0")}`}</h4>
          <h2 className="quiz-question cont">{QustionsArray[Idd][arrayIndex[idx]].qus}</h2>
          <div className="quiz-options cont">


            <button className="quiz-option all cont" onClick={()=>{
            
            var all =  document.querySelectorAll(".all");
            all.forEach(element => {
              element.classList.remove("active");
            });
            all[0].classList.add("active"); 

          setSellect(0);
              }}>{QustionsArray[Idd][ arrayIndex[idx] ].op1}</button>
          
          
          
            <button
            onClick={(ele)=>{
            
              var all =  document.querySelectorAll(".all");
              all.forEach(element => {
                element.classList.remove("active");
              });
              all[1].classList.add("active"); 
              setSellect(1);
          }}

            className="quiz-option all cont ">{QustionsArray[Idd][arrayIndex[idx]].op2}</button>
            <button onClick={()=>{
            
            var all =  document.querySelectorAll(".all");
            all.forEach(element => {
              element.classList.remove("active");
            });
            all[2].classList.add("active"); 
            setSellect(2);
        }} className="quiz-option all cont">{QustionsArray[Idd][arrayIndex[idx]].op3}</button>
            <button   onClick={()=>{
            
            var all = document.querySelectorAll(".all");
            all.forEach(element => {
              element.classList.remove("active");
            });
            all[3].classList.add("active"); 
            setSellect(3);
        }} className="quiz-option all cont">{QustionsArray[Idd][arrayIndex[idx]].op4}</button>

        <h5 className='HintSellect cont'>{HintSellect}</h5>
          </div>
          <button className="quiz-next cont" onClick={ ()=> { 
            var newArray  = arrayOAns ;
            var newTimeSubmit = [] ;
            newTimeSubmit =TimeSubmit ;
            newTimeSubmit.push(time); 
            newArray.push(select) ;
            setTimeSubmit(newTimeSubmit) ; 
            setArrayOAns (newArray); 
            var all = document.querySelectorAll(".all");
            all.forEach(element => {
              element.classList.remove("active");
            });


            
            if ( select == QustionsArray[Idd][arrayIndex[idx]].ans) {
              setScore ( score+1 ); 
            }

            if ( select ==-1 ) {
                setHintSellect( "الرجاء عدم ترك الاجابة فارغة "); 
            }else 
            if(idx ==QustionsArray[Idd].length-1 ) {
            
            if(select == QustionsArray[Idd][arrayIndex[idx]].ans) {
                  setScore ( score+1 ); 
              }

                setBool(false ); 
                setBool2(true); 
                setIdx(0) ;
                setHintSellect( ""); 
            } else {
              setHintSellect( ""); 
            setIdx( idx+1 ) ;
            setSellect(-1) ; 
            }

          }}>التالي</button>
        </div>
      </div>
          
      ) : (
        
        
        
        bool2 ? (
          <div className="ClassStart cont" >
            <h2 className='ScoreFinal cont' >النتيجة النهائية  =  {score}/{QustionsArray[Idd].length}</h2>
            <Link className='backToHome cont' to="/">
            العودة للصفحة الرئيسية
            </Link>

            <button className='backToHome cont' onClick={() => { 

                setShowAnswer(!ShowAnswer); 
            }}   > {ShowAnswer ? "اخفاء الاخطاء والاجابات الصحيحة" : "عرض الاخطاء والاجابات الصحيحة"}</button>


              {ShowAnswer ? (
                <div className='ShowAns'>
            <h2 className='Answer cont' style={{textAlign:"center" , zIndex:"1" , textShadow:"10px 10px 10px #6a5757" , fontSize:"27px"}}>الاجابات النموذجية</h2>
              
              
                {QustionsArray[Idd].map( (e)=>{
                 
                  return(
                    <div className="quiz-container2 cont">
                      <div className="quiz-box cont">
                        {/* {`${Math.floor(time/60)} :${String(time % 60).padStart(2, "0")}`} */}
                        <h1 
                          style={ { color:"red" , fontSize:"13px",marginBottom:"14px" }}
                        >{`${Math.floor((((QustionsArray[Idd].length*60)/2)-TimeSubmit[index])/60)} :${String( (((QustionsArray[Idd].length*60)/2) - TimeSubmit[index]) % 60).padStart(2, "0")}`}</h1>
                        <h2 className="quiz-question cont">{e.qus}</h2>
                        <div className="quiz-options cont">
            {/* arrayIndex */}
                          <button className={`quiz-option2 all cont ${ arrayOAns[arrayIndex[index]]==0? "active" :""}`} >{e.op1}</button>
                          <button className={`quiz-option2 all cont ${ arrayOAns[arrayIndex[index]]==1? "active" :""}`}>{e.op2}</button>
                          <button className={`quiz-option2 all cont ${ arrayOAns[arrayIndex[index]]==2? "active" :""}`}>{e.op3}</button>
                          <button className={`quiz-option2 all cont ${ arrayOAns[arrayIndex[index]]==3? "active" :""}`}>{e.op4}</button>
              
                        </div>
    
                        { arrayOAns[arrayIndex[index++]]==e.ans? (

                          <>
                          <h4 className='AnswerDone cont'>الاجابة صحيحة</h4>
                          <i class="fa-solid fa-circle-check DoneAnswer"></i>
                          </>
                        ) : (
                            <div>
                              <h2 style={{color:"#f54c4c", fontSize:"17px" , marginTop:"10px"}}>الاجابة خاظئة </h2>
                              <h4 style={{marginTop:"10px" , marginBottom : "5px"}}>: الاجابة الصحيحة هي </h4>
                               {
    
                              <div> {e.ans == 0 ? (<h3 style={style}>{e.op1}</h3>) :e.ans == 1 ? (<h3 style={style}>{e.op2}</h3>) : e.ans == 2 ? (<h3 style={style}>{e.op3}</h3>) : (<h3 style={style}>{e.op4}</h3>) } </div>  
                              }
                            </div>
                        )}
                        
                      </div>
                    </div>
                    ) 

                    
                  } )
                }
              
              
                </div>


              ) : (<></>)}  



            
          </div>
        
        ) : (
          <div className='ClassStart cont'>
        <button className='BtnStart cont' onClick={()=> { 
          
          setTime(((QustionsArray[Idd].length*60)/2)); 

          setStartTime(true) ; 

          setBool(true)

        }}>ابــدأ </button>
        </div>
      )
        
        
        )}
  
    </div>
  )
}
