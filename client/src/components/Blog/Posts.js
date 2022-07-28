import React from 'react'
import BlogCard from './BlogCard'

export default function Posts(props) {
    if (!props.posts.length) return (<h1>Opps! Nothing to show at the moment</h1>);

    return props.posts?.map((post, index) =>  (
            <BlogCard post={post} key={index} />
        )
    )
    }
