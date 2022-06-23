import React from 'react'
import MyContact from '../components/MyContact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Contact() {
    return (
        <div>
            <Navbar title="Contact" />
            <MyContact />
            <Footer />
        </div>
    )
}
