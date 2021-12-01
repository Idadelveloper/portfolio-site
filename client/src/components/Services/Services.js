import React from 'react'
import './Services.css'
import '../../index.css'
import Marquee from "react-fast-marquee";

export default function Services() {
    return (
        <div className="parent pt-5 mb-10">
            <div id="services" className="services">
                <h2 className="title">Services/Interests</h2>
                <Marquee pauseOnHover="true">
                    <div className="service web">Web Development</div>
                    <div className="service ds">Data Science</div>
                    <div className="service  devops">DevOps</div>
                    <div className="service opensource">Open Source</div>
                    
                </Marquee>
                <br />
                <Marquee direction="right" pauseOnHover="true" >
                    <div className="service community">Community</div>
                    <div className="service blockchain">Blockchain</div>
                    <div className="service mobile">Mobile Development</div>
                    <div className="service ml-ai">ML & AI</div>
                </Marquee>
            </div>
        </div>
    )
}
