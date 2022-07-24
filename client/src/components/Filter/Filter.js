import React, { useEffect } from 'react'
import './Filter.css'

export default function Filter({setActiveCategory, activeCategory, setFiltered, blogPosts}) {

    useEffect(() => {
        if (activeCategory === "") {
            setFiltered(blogPosts)
            return;
        }
        const filtered = blogPosts.filter((post) => post.category.includes(activeCategory))
        setFiltered(filtered)
    }, [activeCategory])

  return (
    <div className="filter-container flex justify-center">
        <button className={activeCategory === "" ? "active" : ""} onClick={() => setActiveCategory("")}>All</button>
        <button className={activeCategory === "career" ? "active" : ""} onClick={() => setActiveCategory("career")}>career</button>
        <button className={activeCategory === "internship" ? "active" : ""} onClick={() => setActiveCategory("internship")}>internship</button>
        <button className={activeCategory === "opportunity" ? "active" : ""} onClick={() => setActiveCategory("opportunity")}>opportunity</button>
        <button className={activeCategory === "other" ? "active" : ""} onClick={() => setActiveCategory("other")}>opportunity</button>
    </div>
  )
}
