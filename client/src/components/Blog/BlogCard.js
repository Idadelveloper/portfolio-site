import React from 'react'
import './Blog.css'
import { motion } from 'framer-motion/dist/framer-motion'
import image from '../../assets/image-2.jpg'
import { Link } from 'react-router-dom'


export default function BlogCard(props) {
  return (
    <motion.div layout key={props.key} className="w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-lg mb-20">
        <img className="w-full card-image" src={props.post?.image} alt="Image for this post" onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src=image;
        }} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 blog-title">{props.post?.title}</div>
            <p className="text-gray-700 text-base">
            {props.post?.description}
            </p>
        </div>
        <div className="flex justify-between px-10">
            <p className="text-gray-700 mb-2 text-xs font-semibold italic">Created at {new Date(props.post?.createdAt).toLocaleDateString()}</p>
            <p className="text-gray-700 mb-2 text-xs font-semibold italic">Updated at {new Date(props.post?.updatedAt).toLocaleDateString()}</p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">{props.post?.category}</span>
            
            <Link to={props.post?.slug} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 text-sm rounded-full mb-2 card-read-more flex items-center">Read more</Link>
        </div>
    </motion.div>
  )
}
