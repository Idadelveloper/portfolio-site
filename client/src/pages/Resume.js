import React from 'react'
import MyResume from '../components/Resume/MyResume'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

export default function Resume() {
    return (
        <div>
            <Navbar title="Resume" />
            <MyResume />
            <Footer />
        </div>
    )
}
