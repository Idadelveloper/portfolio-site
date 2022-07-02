import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import MyProjects from '../components/Projects/MyProjects'

export default function Projects() {
    return (
        <div>
            <Navbar title="Projects" />
            <MyProjects />
            <Footer />
        </div>
    )
}
