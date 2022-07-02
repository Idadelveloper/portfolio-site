import React from 'react'
import MyContact from '../components/Contact/MyContact'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

export default function Contact() {
    return (
        <div>
            <Navbar title="Contact" />
            <MyContact />
            <Footer />
        </div>
    )
}
