import { useState } from 'react'
import airbnbLogo from "./images/airbnb.png"

export default function Navbar() {
    return (
        <nav>
        <img src={airbnbLogo}></img>
        </nav>
    )
}