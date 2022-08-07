import React from 'react'
import './MyAbout.css'
import ida from '../../assets/ida/ida.jpg'
import { Helmet } from 'react-helmet'

export default function MyAbout() {
    return (
        <div>
            <div className="about">
                <Helmet>
                        <meta
                            property="og:title"
                            content={"Ida Delphine | About"}
                        />
                        <meta
                            property="og:image"
                            content={ida}
                        />
                        <meta
                            name="description"
                            content={"All about Meh Mbeh Ida Delphine"}
                        />
                </Helmet>
                <div className="circle circle-a"></div>
                <div className="circle circle-b"></div>
                <div className="circle circle-c"></div>
                <div className="about-content">
                    <div><p>I’m currently a Computer Engineering student at The University of Bamenda in Cameroon who loves learning about new technologies and figuring out how to use new tools I come across. I have not always been this nerdy techie. I was initially in med school but had to drop out after I wrote my first Python script back in 2019. I had no idea what I was missing back then and since I started my tech journey, I haven’t looked back!!!</p></div>

                    <img src={ida} alt="Ida Delphine's image" className="ida-image" />

                    <div><p>A couple of months into my tech journey trying out new languages and trying to figure out what works best for me, I came across opensource which changed my life and the way I view technology in general. I am very passionate about open source and getting others involved in it because I believe the more folks get involved, the better most of the tech we enjoy will be. I’ve had the opportunity to contribute to some cool opensource projects through Outreachy, Google Summer of Code, and the Major League Hacking Fellowship.</p> </div>

                    <div><p>I am also very big on community and a very active member of the Google Developer Student Club of my university, Google Developer Groups, and the Women TechMakers of my community. I’m also very passionate about getting more women to get into tech fields and sometimes I spend my time going to secondary schools to motivate teenage girls to pursue a career in STEM (Science, Technology, Engineering, and Mathematics). I strongly believe one of the ways to bridge the gender gap we have in tech or STEM as a whole is by starting from the base and getting young women informed. </p></div>

                    <div><p>Apart from my community involvement, I love taking part in competitions and hackathons where I am challenged to build fun & cool projects. One of my greatest achievements is when I took part in the Google Developer Student Clubs solution challenge where my team emerged among the top 10 global finalists for building a mobile application that helps people find clean water. <br /> My goal is to become a very skilled software engineer and be an inspiration to the younger generation or anyone looking forward to taking up a career in tech.</p></div>

                    <div><i>You can follow me on all social platforms <b>@idadelveloper</b> :)</i></div>
                </div>
            </div>
        </div>
    )
}
