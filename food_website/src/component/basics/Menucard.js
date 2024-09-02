import React from 'react'

const Menucard = ({menuData}) => {
  console.log(menuData)
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
            <span className="card-tag subtle">order now</span>
        </div>
       </div> </>)
      })
    }
    </section>
    </>
  )
}

export default Menucard
