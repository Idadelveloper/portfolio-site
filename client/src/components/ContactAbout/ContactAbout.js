import React from 'react'
import './ContactAbout.css'
import { Link } from 'react-router-dom'

export default function ContactAbout() {
    return (
        <div>
            <div className="contact-about">
                <Link to='./contact'>
                <div className="home-contact">
                    <h1 className="contact1">Contact</h1>
                    <h2 className="contact2">Contact</h2>
                </div>
                </Link>
                <Link to='./about'>
                <div className="home-about">
                    <h1 className="about1">About</h1>
                    <h2 className="about2">About</h2>
                </div>
                </Link>
            </div>
        </div>
    )
}
