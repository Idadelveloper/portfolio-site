import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import image from '../../assets/image-1.jpg'
import './Blog.css'
import parse from 'html-react-parser'

export default function BlogSingle() {
    let { slug } = useParams();
    const [singlePost, setSinglePost] = useState({})

    const getSinglePost = () => {
        axios.get(`/articles/${slug}`)
        .then((response) => {
            const article = response.data
            setSinglePost(article)
        }).catch(error => console.error(`Error: ${error}`))
    }
    useEffect(() => {
        getSinglePost();
    }, []);

    const getPostBody = () => {
        if (singlePost.sanitizedHtml) {
            return parse(singlePost.sanitizedHtml)
        } else {
            return (
                <h4>Opps! Something went wrong retrieving this content!</h4>
            )
        }
    }


  return (
    <div className="single-blog text-left">
            <div className="single-head mb-5 text-left ml-10">
                <h1 className="blog-tit text-5xl font-semibold mb-5">{singlePost.title}</h1>
                <p className="blog-date mb-5 text-gray-400 italic">Created at {singlePost.date}</p>
            </div>
            <img className={singlePost.image} src={image} alt="" onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src=image;
                }} />
            <div className="blog-body px-20 py-10">
                {getPostBody()}
            </div>
    </div>
  )
}
