import { useTranslation } from "react-i18next";
import "./card.css" ;
import { useNavigate } from 'react-router-dom';
import i18n from "i18next";




function  Card (props)
{

  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("IdShow",props.arr.id)
    navigate('/ShowPage' , { state: props });
  };
  
  const { t } = useTranslation();

  return(
    
    <div className="AllCard">
      <div className="Card">
        <img src={props.arr.LinkImage} alt="MaterialImage" className="CardImage" />
        <div className="CardContent">
          <h3 style={{fontSize:"10px"}} className="NameMain">{i18n.language=="ar"?props.arr.name : props.arr.nameen}</h3>
          <button onClick={handleClick}  className="CardButton">{t("Show")}</button>
        </div>
      </div>
      
  </div>
  
    
  ); 
}

export default Card ;
