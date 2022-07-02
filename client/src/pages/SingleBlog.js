import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import BlogSingle from '../components/Blog/BlogSingle'

export default function SingleBlog() {
  return (
    <div>
        <Navbar title="Ida's Blog" />
        <BlogSingle />
        <Footer />
    </div>
  )
}
