import React, { useEffect, useState } from 'react'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faTwitter, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"
import useAnalyticsEventTracker from '../../useAnalyticsEventTracker'


export default function Footer() {
    const [date , setDate] = useState();
    const gaEventTracker = useAnalyticsEventTracker('Social links');
    const getYear = () =>  setDate(new Date().getFullYear())


    useEffect(() => {
        getYear();
    }, [])
    
    return (
        <div className="footer">
            <div className="social">
                <a href="https://github.com/Idadelveloper" onClick={()=>gaEventTracker('social - github')} target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                <a href="https://www.linkedin.com/in/idadelveloper/" onClick={()=>gaEventTracker('social - linkedin')} target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                <a href="https://twitter.com/idadelveloper" onClick={()=>gaEventTracker('social - twitter')} target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                <a href="https://www.instagram.com/idadelveloper/" onClick={()=>gaEventTracker('social - instagram')} target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                <a href="https://facebook.com/idadelveloper" onClick={()=>gaEventTracker('social - facebook')} target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
            </div>
            <div className="copyright">
                <p>Ⓒ {date}, Idadelveloper. Made with ❤️ </p>
            </div>
        </div>
    )
}
