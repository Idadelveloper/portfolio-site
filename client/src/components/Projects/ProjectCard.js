import React from 'react'
import image from '../../assets/image-1.jpg'
import useAnalyticsEventTracker from '../../useAnalyticsEventTracker'

export default function ProjectCard(props) {
    const gaEventTracker = useAnalyticsEventTracker(`Project - ${props.name}`);
    const img = `/projects/${props.image}`
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 my-5">
        <img className="rounded-t-lg w-full card-image" src={img} alt="Image for this project" onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src=image;
                }} />
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
            <div className="justify-center">
            <a href={props.repo} class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white github-btn" target="_blank" onClick={()=>gaEventTracker('view on github')}>
                Github Link
                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            </div>
        </div>
    </div>
  )
}
