import React, { useEffect, useState } from 'react'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faTwitter, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"


export default function Footer() {
    const [date , setDate] = useState();

    const getYear = () =>  setDate(new Date().getFullYear())


    useEffect(() => {
        getYear();
    }, [])
    
    return (
        <div className="footer">
            <div className="social">
                <a href="https://github.com/Idadelveloper" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                <a href="https://github.com/Idadelveloper" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                <a href="https://github.com/Idadelveloper" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                <a href="https://github.com/Idadelveloper" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                <a href="https://github.com/Idadelveloper" target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
            </div>
            <div className="copyright">
                <p>Ⓒ {date}, Idadelveloper. Made with ❤️ </p>
            </div>
        </div>
    )
}
