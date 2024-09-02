import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import Menucard from "./Menucard";
import Navbar from "./Navbar";
const uniqueList = [...new Set(Menu.map((curElem) =>{
    return curElem.category;

}) ),"All"];


const Resturant = () =>{
    const [menuData, setMenuData] = useState(Menu);
    const [menulist , setMenulist] =  useState(uniqueList);
    console.log(menulist)
    const fileteritem = (category) =>{
if(category === "All")
    {
        setMenuData(Menu);
        return;
    }
        const updatedlist = Menu.filter((curElem)=>{
           return  curElem.category === category;
        })
        setMenuData(updatedlist);

    }
    return(<>
   <Navbar fileteritem = {fileteritem} menulist={menulist}/>
       <Menucard menuData={menuData}/>
    </>)
}

export default Resturant;