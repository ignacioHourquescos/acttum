import s from './Card.module.scss'
import {useState} from 'react'
import { useRouter } from "next/router";
import { useAccordionButton} from 'react-bootstrap/AccordionButton';
import Accordion from 'react-bootstrap/Accordion'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDetail from '../CardDetail/CardDetail';

const Card2 = ({title, location, fullTime, date, remote,color}) =>{

   
  
     const router = useRouter();
  
     const goHome = () => {
        const fullPath = `/`;
        router.push(fullPath);
     };

     

   return(<>

      
       
       <div className={s.container} style={{backgroundColor:"#3c3939",  borderLeft: `5px solid ${color}`}}>
            

            <div className={s.date}>{date}</div>
            <div className={s.title}>{title}</div>
            <div className={s.location}>{location}</div>
            <div className={s.detail_container}>
               <div className={s.fullTime}>{fullTime}</div>
               <div className={s.remote}>{remote}</div>
            </div>
            <Accordion defaultActiveKey="1">
               <CustomToggle eventKey="0">+</CustomToggle>
               <Accordion.Collapse eventKey="0">
                  <CardDetail color={color}/>
               </Accordion.Collapse>
      </Accordion>
      </div>
   </>)
}


export default Card2

function CustomToggle({ children, eventKey }) {

   const decoratedOnClick = useAccordionButton(eventKey, () =>
      buttonPressed?setButtonPressed(false):setButtonPressed(true)

   );
 
   const [buttonPressed, setButtonPressed]=useState(false)
   return (
     <button
       type="button"
       style={buttonPressed? button_style_pressed :button_style}
       onClick={decoratedOnClick}
     >
       {children}
     </button>
   );
 }

 const button_style={
    position:"absolute",
    right:"1rem",
    top:"6rem",
    width:"2rem",
    display:"block",
    height:"2rem",
    borderRadius:"20px",
    decoration:"none",
    backgroundColor:"none",
    background: "none",
	color: "inherit",
	border: "none",
	padding: 0,
	font: "inherit",
	cursor: "pointer",
	outline: "inherit",
   background: "#3A3838", 
   boxShadow: "3px 3px 5px #282626,-3px -3px 5px #504c4c"
 }

 const button_style_pressed={
   position:"absolute",
   right:"1rem",
   top:"6rem",
   width:"2rem",
   display:"block",
   height:"2rem",
   borderRadius:"20px",
   decoration:"none",
   backgroundColor:"none",
   background: "none",
  color: "inherit",
  border: "none",
  padding: 0,
  font: "inherit",
  cursor: "pointer",
  outline: "inherit",
  background: "#4F5150", 
  boxShadow: "inset 3px 3px 5px #282626,inset -3px -3px 5px #504c4c"
}

