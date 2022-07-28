import React from 'react'
import './Skills.css'
import '../../index.css'
import Marquee from "react-fast-marquee";

export default function Skill() {
    return (
        <div className="parent pt-5 mb-10">
            <div id="skills" className="services">
                <h2 className="title">Skills</h2>
                <Marquee pauseOnHover="true">
                    <div className="service web">Python</div>
                    <div className="service ds">JavaScript</div>
                    <div className="service  devops">HTML/CSS</div>
                    <div className="service opensource">Golang</div>
                    <div className="service web">Rust</div>
                    <div className="service  ds">Dart</div>
                </Marquee>
                <br />
                <Marquee direction="right" pauseOnHover="true" >
                    <div className="service community">Community</div>
                    <div className="service blockchain">Blockchain</div>
                    <div className="service mobile">React</div>
                    <div className="service ml-ai">Flutter</div>
                    <div className="service community">Flask</div>
                    <div className="service blockchain">Django</div>
                    <div className="service mobile">Machine Learning</div>
                </Marquee>
            </div>
        </div>
    )
}
