import React, { useState, useEffect } from 'react'
import './Blog.css'
import image from '../../assets/image-1.jpg'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function BlogHome() {

    const [blogPosts, setBlogPosts] = useState([])

    const getArticles = () => {
        axios.get('/articles')
        .then((response) => {
            const articles = response.data
            setBlogPosts(articles)
            console.log("Data is recieved")
        }).catch(error => console.error(`Error: ${error}`))
    }

    useEffect(() => {
        getArticles();
    }, []);

    const displayCards = (posts) => {
        if (posts.length == 0) return null;

        return posts.map((post, index) =>  (
            <div key={index} className="w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-lg mb-20">
                <img className="w-full card-image" src={post.image} alt="Image for this post" onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src=image;
                }} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 blog-title">{post.title}</div>
                    <p className="text-gray-700 text-base">
                    {post.description}
                    </p>
                </div>
                <div className="text-gray-700 mb-2 text-xs font-bold italic">Created at {post.date}</div>
                <div className="px-6 pt-4 pb-2 flex justify-between">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">{post.category}</span>
                    
                    <Link to={post.slug} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 text-sm rounded-full mb-2 card-read-more">Read more</Link>
                </div>
            </div>
            )
        )
    }


  return (
    <div className="blog-home pt-40 px-20 grid justify-center grid lg:grid-cols-3 gap-12 lg:gap-0">
        {displayCards(blogPosts)}
    </div>
  )
}
