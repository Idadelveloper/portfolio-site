import React from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'
import projects from './projects.json' 
import { Helmet } from 'react-helmet'

export default function MyProjects() {
  

  const getProjects = () => {
    return projects.map((project) => {
      return <ProjectCard key={project.id} name={project.name} description={project.description} image={project.image} repo={project.repo} />
    })
  }
  return (
    <div className="">
    <Helmet>
        <meta
            property="og:title"
            content={"Ida Delphine | Projects"}
        />
        <meta
            name="description"
            content={"Ida Delphine's projects"}
        />
    </Helmet>
      <div className="projects">
        <h2 className="text-2xl semibold">Here are a couple of cool projects I have worked on </h2>
        <p>Checkout more of my projects on <a href="https://github.com/Idadelveloper" target="_blank">GitHub</a></p>
        <div className="px-10 py-5 grid justify-center grid lg:grid-cols-3 gap-12 lg:gap-0">
          {getProjects()}
        </div>
      </div>
    </div>
  )
}
