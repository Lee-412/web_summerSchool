import React from 'react'
import "../cardBase/cardFeature.css"


const CardDefault = ({ cardInfo }: any) => {
  return (
    <div className="feature-container">
      <div className="card-container">
        <img src={cardInfo.img} alt="icon"></img>
        <h4>{cardInfo.title}</h4>
        <p>{cardInfo.content}
        </p>
      </div>
    </div>

  )
}

export default CardDefault