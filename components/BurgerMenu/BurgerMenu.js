import {  useState } from 'react';
import BurgerMenuIcon from './BurgerMenuIcon';
import SideBar from './SideBar';


const BurgerMenu = (props) => {
   const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

   const drawerToggleClickHandler = () =>{
        setSideDrawerOpen((prevState)=>{
            setSideDrawerOpen(!prevState.sideDrawerOpen); 
        })
   }

   const closeMenu = () => {
        setSideDrawerOpen(false);
   }

   return (
   <>
      <BurgerMenuIcon drawerToggleClickHandler={drawerToggleClickHandler} />
      <SideBar click={closeMenu} show={sideDrawerOpen}/> 
   </>
  );
  
}

export default BurgerMenu;

