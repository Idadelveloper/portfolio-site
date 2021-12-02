import React from 'react'
import resume from '../../assets/image-2.jpg'
import '../../index.css'
import './Resume.css'

export default function Resume() {
    return (
        <div style={{cursor: "pointer"}} className="resume">
            <div className="res grid grid-cols-1 md:grid-cols-2">
                
                <h1 className="resume-text3">Resu<br />me</h1>
                <h2 className="resume-text4">Resume</h2>
                <img src={resume} alt=""className="image" />
                <div className="resume-text">
                    <h1 className="resume-text1">Resu<br />me</h1>
                    <h2 className="resume-text2">Resume</h2>
                </div>
            </div>
        </div>
    )
}
