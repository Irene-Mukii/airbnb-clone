import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import data from "./data"


export default function App() {
    const dataElements = data.map(function (card){
        return <Card 
        image= {card.image}
        rating= {card.rating}
        ratingNumber= {card.rating}
        country= {card.country}
        price= {card.price}
        />
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <div className="catalog">
                {dataElements}
            </div>

        </div>
    )
}