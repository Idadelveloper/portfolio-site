import React from 'react'
import portfolio from '../../assets/image-1.jpg'
import './Portfolio.css'
import '../../index.css'
import { Link } from 'react-router-dom'

export default function Portfolio() {
    return (
        <Link to='./projects'>
            <div style={{cursor: "pointer"}} className="portfo">
                <div className="portfolio grid grid-cols-1 md:grid-cols-2">
                    <div className="text">
                        <h1 className="text1">Portfo<br />lio</h1>
                        <h2 className="text2">Portfolio</h2>
                    </div>
                    <h1 className="text3">Port<br />folio</h1>
                    <h2 className="text4">Portfolio</h2>
                    <img src={portfolio} alt=""className="image" />
                    
                </div>
            </div>
        </Link>
    )
}
