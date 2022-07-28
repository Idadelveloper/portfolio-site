import React, { useState, useEffect } from 'react'
import './Blog.css'
import axios from 'axios'
import Filter from '../Filter/Filter'
import { motion } from 'framer-motion/dist/framer-motion'
import Loading from '../Loading/Loading'
import Posts from './Posts'
import useAnalyticsEventTracker from '../../useAnalyticsEventTracker'

export default function BlogHome() {
    const gaEventTracker = useAnalyticsEventTracker('Blog home')

    const [blogPosts, setBlogPosts] = useState([])
    const [filtered, setFiltered] = useState([])
    const [activeCategory, setActiveCategory] = useState("")
    const [isLoading, setIsLoading] = useState(true);

    const getArticles = () => {
        const url = `https://${process.env.REACT_APP_DOMAIN}:${process.env.REACT_APP_SERVER_PORT}/articles`
        axios.get(url)
        .then((response) => {
            const articles = response.data
            setBlogPosts(articles)
            setFiltered(response.data)
            setIsLoading(false)
            console.log("Data is recieved")
        }).catch(error => console.error(`Error: ${error}`))
    }


    useEffect(() => {
        getArticles();
    }, []);



    const getData = () => {
        return (
            <div>
                <div className="categories flex justify-center py-10 px-3 categories">
                    <h6 className="">Filter by</h6>
                    <Filter blogPosts={blogPosts} setFiltered={setFiltered} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                </div>

                <motion.div layout className="blog-home px-20 grid justify-center grid lg:grid-cols-3 gap-12 lg:gap-0">
                    {isLoading ? <Loading /> : <Posts posts={filtered} />}
                </motion.div>

            </div>

        )
    }


  return (
      <div className="single-blog">
        <h3 className="text-3xl font-semibold p-5">Welcome to my blog!!!</h3>
        <p className="blog-more">Checkout more of my technical posts on <a href="https://medium.com/@idadelveloper" onClick={()=>gaEventTracker('medium')} target="_blank">Medium</a>, <a href="https://idadelveloper.hashnode.dev/" onClick={()=>gaEventTracker('hashnode')} target="_blank">Hashnode</a>, and <a href="https://dev.to/idadelveloper" onClick={()=>gaEventTracker('dev')} target="_blank">Dev</a>.</p>
        { isLoading ? <Loading /> : getData() }
      </div>
    
  )
}

