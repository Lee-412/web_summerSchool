import CardDefault from "@/Component/cardBase/cardDefault"
import "../cardBase/cardFeature.css"
import cards from "@/Component/featuresView/Card"
import React from 'react'

const Feature = () => {
    
   // console.log(logo1, logo2, logo3);
    
  return (
    <div className="feature">
        <h2>Features</h2>
        <h3>Discover the benefits of our platform</h3>
        <div className='feature-container'>
            {
                cards.map((card)=>{
                    return(
                    <CardDefault cardInfo = {card}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Feature