import React from 'react'
import BlogCard from './BlogCard'

export default function Posts(props) {
    if (!props.posts.length) return (<h1>Can't retrieve posts now</h1>);

    return props.posts?.map((post, index) =>  (
            <BlogCard post={post} key={index} />
        )
    )
    }
