import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import data from "./data"


export default function App() {
    const dataElements = data.map(function (card){
        return <Card 
        key= {card.id}
        {...card}
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