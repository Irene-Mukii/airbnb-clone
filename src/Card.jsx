import { useState } from 'react'

import starImage from "./images/Star 1.png"

export default function Card (props){
    return (
        <div className="card">
            <img src={props.image} className="card--image"></img>
            <div className="card--stats">
                <img src={starImage} className="card--star"></img>
                <span>{props.rating}</span>
                <span className="gray">{props.ratingNumber}• </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><b>From ${props.price}/</b>  person</p>
        </div>
    )
}