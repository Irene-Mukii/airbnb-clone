import { useState } from 'react'

import starImage from "./images/Star 1.png"

export default function Card (props){

    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={props.image} className="card--image"></img>
            <div className="card--stats">
                <img src={starImage} className="card--star"></img>
                <span>{props.rating}</span>
                <span className="gray">{props.ratingNumber}• </span>
                <span className="gray">{props.country}</span>
            </div>
            <p className='card--title'>{props.title}</p>
            <p><b>From ${props.price}/</b>  person</p>
        </div>
    )
}