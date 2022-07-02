import React, { useRef, useState } from 'react'
import './MyContact.css'
import contactImage from '../../assets/3d-center-purple.png'
import emailjs from '@emailjs/browser';
import { useAlert } from 'react-alert'

export default function MyContact() {
    const[name, setName] = useState("");
    const[subject, setSubject] = useState("");
    const[email, setEmail] = useState("");
    const[message, setMessage] = useState("");

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
        }, (error) => {
            alert.show('Opps! Your message was not sent')
        });
    };
    return (
        <div>
            <div className="">
                <div className="contact relative">
                    <div className="contact-circle1"></div>
                    <div className="contact-circle2"></div>
                    <div className="contact-form">
                        <form action="" className="form" ref={form} onSubmit={sendEmail}>
                            <p className="mt-5">Do you have anything to tell me? I will love to hear from you :)</p>
                            
                            <input type="text" name="name" className="name mt-4" placeholder="Full Name" tabIndex="1" defaultValue={name} onChange={(e) => setName(e.target.value)} required />

                            <input type="text" name="subject" className="subject" placeholder="Subject" tabIndex="2" defaultValue={subject} onChange={(e) => setSubject(e.target.value)} required />

                            <input type="email" name="email" id="email" className="email" placeholder="Email" tabIndex="3" defaultValue={email} onChange={(e) => setEmail(e.target.value)} required />

                            <textarea name="message" id="message" placeholder="Message" cols="30" rows="10" defaultValue={message} onChange={(e) => setMessage(e.target.value)} required></textarea>

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
