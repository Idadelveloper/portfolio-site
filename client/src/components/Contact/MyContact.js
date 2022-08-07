import React, { useRef, useState } from 'react'
import './MyContact.css'
import contactImage from '../../assets/3d-center-purple.png'
import emailjs from '@emailjs/browser';
import { useAlert } from 'react-alert'
import useAnalyticsEventTracker from '../../useAnalyticsEventTracker';
import { Helmet } from 'react-helmet';

export default function MyContact() {
    const gaEventTracker = useAnalyticsEventTracker('Contact mode')

    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const form = useRef();
    const alert = useAlert();

    const sendEmail = (e) => {
        e.preventDefault();
        setName("");
        setSubject("");
        setEmail("");
        setMessage("");

        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
        .then((result) => {
            alert.show('Sucess!!, your message was sent.')
            gaEventTracker('form sent')
        }, (error) => {
            alert.show('Opps! Your message was not sent')
            gaEventTracker('form not sent')
        });
    };
    return (
        <div>
            <Helmet>
                <meta
                    property="og:title"
                    content={"Ida Delphine | Contact"}
                />
                <meta
                    name="description"
                    content={"Contact Ida Delphine"}
                />
            </Helmet>
            <div className="">
                <div className="contact relative">
                    <div className="contact-circle1"></div>
                    <div className="contact-circle2"></div>
                    <div className="contact-form">
                        <form action="" className="form" ref={form} onSubmit={sendEmail}>
                            <p className="mt-5">Do you have anything to tell me? You can fill the form below or directly <a href="mailto:idadelveloper@gmail.com" className="con-email" onClick={()=>gaEventTracker('email sent')}>email me</a>. I will love to hear from you :)</p>
                            
                            <input type="text" name="name" className="name mt-4" placeholder="Full Name" tabIndex="1" value={name} onChange={(e) => setName(e.target.value)} required />

                            <input type="text" name="subject" className="subject" placeholder="Subject" tabIndex="2" value={subject} onChange={(e) => setSubject(e.target.value)} required />

                            <input type="email" name="email" id="email" className="email" placeholder="Email" tabIndex="3" value={email} onChange={(e) => setEmail(e.target.value)} required />

                            <textarea name="message" id="message" placeholder="Message" cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>

                            <button type="submit" className="send mb-4">Send</button>
                            
                        </form>
                        <div className="contact-image">
                            <img src={contactImage} alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
