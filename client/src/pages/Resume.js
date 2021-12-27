import React from 'react'
import MyResume from '../components/MyResume'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Resume() {
    return (
        <div>
            <Navbar title="Resume" />
            <MyResume />
            <Footer />
        </div>
    )
}
