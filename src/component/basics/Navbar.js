import React from 'react'

const Navbar = ({fileteritem, menulist}) => {
  return (
    <>
     <nav className="navbar">
        <div className="btn-group">
        {
            menulist.map((curElem)=>{
             return(            <button className="btn-group__item" onClick={() => fileteritem(curElem)}>{curElem}</button>)   
            })
        }
        </div>
    </nav>    
    </>
  )
}

export default Navbar
