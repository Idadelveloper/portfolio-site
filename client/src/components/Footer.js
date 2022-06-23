import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faTwitter, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"


export default function Footer() {
    return (
        <div className="footer">
            <div className="social">
                <a href="https://github.com/Idadelveloper"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                <a href="https://github.com/Idadelveloper"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                <a href="https://github.com/Idadelveloper"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                <a href="https://github.com/Idadelveloper"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                <a href="https://github.com/Idadelveloper"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
            </div>
            <div className="copyright">
                <p>Ⓒ 2021, Idadelveloper. Made with ❤️ </p>
            </div>
        </div>
    )
}
