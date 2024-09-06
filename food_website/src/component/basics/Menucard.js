import React from 'react'
import { useNavigate } from 'react-router-dom';

const Menucard = ({menuData}) => {
  console.log(menuData)
  const navigate = useNavigate(); 
  const handleOrderNow = () => {
    // Programmatically navigate to the Order Now page
    navigate('/ordernow');
  }

  return (
    
   
    <>
    <section className='main-card--cointainer'>
    {
      menuData.map((curElem)=>{
        const {id,name,category,image,description} = curElem;
        return(<>
          <div className="card-container" key={id}>
        <div className="card" >
            <div className="card-body">
               <span className="card-number subtle">{id}</span> 
               <span className="card-auther subtle" >{name}</span>
               <h2 className="cardtitle">{name}</h2>
               <span className="card-description subtle"> {description}</span>
               <div className="card-read">Read</div>

            </div>
            <img src={image} className="card-media" />
            <button className="card-tag subtle" onClick={handleOrderNow} >order now</button>
        </div>
       </div> </>)
      })
    }
    </section>
    </>
  )
}

export default Menucard;
