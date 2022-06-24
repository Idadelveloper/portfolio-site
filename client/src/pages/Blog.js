import React from 'react'
import Navbar from '../components/Navbar'
import BlogHome from '../components/Blog/BlogHome'
import Footer from '../components/Footer'

export default function Blog() {
    return (
        <div>
            <Navbar title="Ida's Blog" />
            <BlogHome />
            <Footer />
        </div>
    )
}
