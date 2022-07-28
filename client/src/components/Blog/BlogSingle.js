import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import image from '../../assets/image-2.jpg'
import './Blog.css'
import parse from 'html-react-parser'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loading from '../Loading/Loading'

export default function BlogSingle() {
    let { slug } = useParams();
    const [singlePost, setSinglePost] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const getSinglePost = () => {
        const url = `https://${process.env.REACT_APP_DOMAIN}:${process.env.REACT_APP_SERVER_PORT}/articles/${slug}`
        axios.get(url)
        .then((response) => {
            const article = response.data
            setSinglePost(article)
            setIsLoading(false)
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

    const post = (post) => {
        return (
            <div className="single-blog text-left">
                <div className="single-head mb-5 text-left mx-10">
                    <div className="flex justify-between items-center tits text-center">
                        <h1 className="blog-tit text-5xl font-semibold mb-5">{post?.title}</h1>
                        <Link to={`/blog`} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 text-sm rounded mb-2 card-see-all h-10 text-center flex items-center"><FontAwesomeIcon icon={faArrowLeft} size="1x" className="mr-2" />See All Posts</Link>
                    </div>
                    <div className="flex justify-between mb-5 dates">
                    <p className="blog-date text-gray-400 italic">Created at {new Date(post?.createdAt).toDateString()}</p>
                    <p className="blog-date text-gray-400 italic">Updated at {new Date(post?.updatedAt).toDateString()}</p>
                    </div>
                </div>
                <img className="single-top-image" src={post?.image} alt="Post image" onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src=image;
                    }} />
                <div className="blog-body px-20 py-10">
                    {getPostBody()}
                </div>
            </div>
        )
    }


  return (
    <div>
        {isLoading ? <Loading /> : post(singlePost)}
    </div>
  )
}
