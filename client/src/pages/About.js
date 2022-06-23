import React from 'react'
import MyAbout from '../components/MyAbout'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function About() {
    return (
        <div>
            <Navbar title="About" />
            <MyAbout />
            <Footer />
        </div>
    )
}
