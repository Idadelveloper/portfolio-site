import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
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
