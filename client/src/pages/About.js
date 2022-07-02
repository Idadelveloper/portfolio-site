import React from 'react'
import MyAbout from '../components/About/MyAbout'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

export default function About() {
    return (
        <div>
            <Navbar title="About" />
            <MyAbout />
            <Footer />
        </div>
    )
}
