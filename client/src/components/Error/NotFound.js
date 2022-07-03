import React from 'react'
import './NotFound.css'
import {useNavigate} from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="not-found relative">
                <div className="not-found-circle1 absolute"></div>
                <div className="not-found-circle2 absolute"></div>
                <div className="not-found-circle3 absolute"></div>
                <div className="notfound">
                    <div className="notfound-message">
                        <h1 className="oh-shoot">Oh Shoot!</h1>
                        <p className="message1-404 mb-5">Sorry! We had to let this page go.</p>
                        <p className="message2-404 mb-10">Let's go back, shall we?</p>
                        <button onClick={() => navigate(-1)} className="go-back">Let's go back</button>
                    </div>
                    <div className="fof">
                        <h1 className="four-o-four">404</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
