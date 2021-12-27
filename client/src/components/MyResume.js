import React from 'react'
import './MyResume.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


export default function MyResume() {
    return (
        <div>
            <div className="myresume" id="resume">
                <div className="resume-heading">
                    <h1 className="ida-name mb-2">Meh Mbeh <span><b>Ida Delphine</b></span></h1>
                    <div className="job-title mb-2">
                        <h3>Software Developer - Community Lead</h3>
                    </div>
                    <div className="heading-location mb-2">
                        <h6>Bamenda, North West Region, Cameroon</h6>
                    </div>
                    <div className="contact-links">
                        <span><a href=""><FontAwesomeIcon icon={faPhone} size="1x" />+(237) 676093549 </a></span>
                        <span><a href=""><FontAwesomeIcon icon={faEnvelope} size="1x" />idadelveloper@gmail.com</a></span>
                        <span><a href=""><FontAwesomeIcon icon={faGlobe} size="1x" />idadelveloper.com</a></span>
                        <span><a href=""><FontAwesomeIcon icon={faGithub} size="1x" />idadelveloper</a></span>
                        <span><a href=""><FontAwesomeIcon icon={faLinkedin} size="1x" />idadelveloper</a></span>
                        <span><a href=""><FontAwesomeIcon icon={faTwitter} size="1x" />idadelveloper</a></span>
                    </div>

                </div>
                <div className="resume-summary mb-6">
                    <div className="title-container">
                        <div className="text-title mr-2"><h3 className="sub-heading"><span>Sum</span>mary</h3></div>
                        <div className="divider"></div> 
                    </div>
                    <p>Currently a Computer Engineering student at the University of Bamenda, Cameroon. Super nerd who loves web, mobile, open source development and enjoys to customize all of the development environment. Interested in devising a better problem-solving method for challenging tasks, and learning new technologies and tools if the need arises. In addition, strongly believes technology is the future and will highly impact the development of my community.</p>
                </div>

                <div className="resume-experience mb-6">
                    <div className="title-container">
                            <div className="text-title mr-2"><h3 className="sub-heading"><span>Wor</span>k Experience</h3></div>
                            <div className="divider"></div> 
                    </div>
                    
                    <div className="experiences">
                        <div className="exp mb-3">
                            <div className="experience mb-2">
                                <div>
                                    <h4 className="ex-com mb-1">UNICEF Office of Innovation</h4>
                                    <h5 className="ex-pos">Full Stack Developer Intern</h5>
                                </div>
                                <div>
                                    <h6 className="ex-location mb-1">Remote</h6>
                                    <h6 className="ex-date">Jul 2021-Jan 2022</h6>
                                </div>
                            </div>
                            <div className="tasks pl-10">
                                <ul>
                                    <li>Contribute to the front-end design and development of a template-driven documentation website for Open Source best practices recommended by UNICEF and improved its accessibility making it top 90%.</li>
                                    <li>Support eight Open Source projects managed by different teams. Create and build out design resources to enable needs assessments, mentorship profiles, and conduct design interviews for other UNICEF Innovation Fund companies and software projects.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="exp mb-3">
                            <div className="experience mb-2">
                                <div>
                                    <h4 className="ex-com mb-1">RTEMS Project</h4>
                                    <h5 className="ex-pos">Google Summer of Code Intern - Software Developer</h5>
                                </div>
                                <div>
                                    <h6 className="ex-location mb-1">Remote</h6>
                                    <h6 className="ex-date">Jun 2021-Aug 2021</h6>
                                </div>
                            </div>
                            <div className="tasks pl-10">
                                <ul>
                                    <li>In general, worked on automatic code formatting and style checking for RTEMS Supercore</li>
                                    <li>Found a code checker or “formatter” that can produce results that match the RTEMS coding conventions.</li>
                                    <li>Added a standalone script in rtems-tools.git that can be run over the rtems.git which creates a report about style problems.</li>
                                    <li>Produced documentation on how the tool works.</li>
                                    <li>Wrote a script built into the git commit hook that can run over patches before committing or submitting via email. This feature helped over 80% of new developers that are not familiar with the code base.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="exp mb-3">
                            <div className="experience mb-2">
                                <div>
                                    <h4 className="ex-com mb-1">Yocto Project</h4>
                                    <h5 className="ex-pos">Outreachy Intern - Software Developer</h5>
                                </div>
                                <div>
                                    <h6 className="ex-location mb-1">Remote</h6>
                                    <h6 className="ex-date">Dec 2020-Mar 2021</h6>
                                </div>
                            </div>
                            <div className="tasks pl-10">
                                <ul>
                                    <li>Took the proof-of-concept implementation of of linking sources with SPDX headers to output files and get it to a state where it can be merged into the Yocto Project repository.</li>
                                    <li>Used the functionality to examine the accuracy of license tagging (LICENSE fields in recipes); looked for errors / noise in the comparison, and produced a simple report with the results about the licenses in the code base.</li>
                                    <li>Ran a check over sources in a ”world” build looking for percentage coverage of SPDX headers, and ran it for several past releases to see if there is a noticeable change over time. I reported a 90% increase in licenses during each release.</li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>

                <div className="resume-certifications mb-6">
                    <div className="title-container">
                            <div className="text-title mr-2"><h3 className="sub-heading"><span>Cer</span>tifications</h3></div>
                            <div className="divider"></div> 
                    </div>
                    <div className="certification">
                        <div className="cert mb-2">
                            <p className="cert-name">Aug 2021 - <b>Top 10 Finalist</b> , <a href="https://drive.google.com/file/d/1t52lP5K6TR13GT5pcGLcg6JKMxURREWJ/view">GDSC Solution Challenge Certificate of Recognition</a></p>
                            <p className="cert-giver">Google Developers</p>
                        </div>
                        <div className="cert mb-2">
                            <p className="cert-name">Jul 2021 - <b>Google Develper Student Clubs Lead</b> , <a href="https://dsc-certify.web.app/c/0C33E288DE7F">2020-2021 Cetificate of Completion</a></p>
                            <p className="cert-giver">Google</p>
                        </div>
                        <div className="cert mb-2">
                            <p className="cert-name">Dec 2019 - <b>Honors</b> , <a href="https://wqu.thedataincubator.com/certificate/5647904245022720">Scientific Computing and Python for Data Science</a></p>
                            <p className="cert-giver">WorldQuant University</p>
                        </div>
                    </div>
                </div>

                <div className="resume-skills mb-6">
                    <div className="title-container">
                            <div className="text-title mr-2"><h3 className="sub-heading"><span>Ski</span>lls</h3></div>
                            <div className="divider"></div> 
                    </div>
                    
                    <div className="languages mb-3 mt-2">
                        <h4 className="font-normal uppercase">Languages</h4>
                        <p>Python | JavaScript | Java | Dart | C++ | HTML | CSS</p>
                    </div>
                    <div className="technologies">
                        <h4 className="font-normal uppercase">Technologies</h4>
                        <p>Git | Github | Linux | Jupyter Notebooks | Numpy | Pandas | Tkinter | Bootstrap | Django | Flutter | React</p>
                    </div>
                </div>

                <div className="resume-education mb-6">
                    <div className="title-container">
                            <div className="text-title mr-2"><h3 className="sub-heading"><span>Edu</span>cation</h3></div>
                            <div className="divider"></div> 
                    </div>
                    
                    <div className="education">
                        <div className="edu">
                            <p className="school mb-1">The University of Bamenda, National Higher Polytechnic Institute</p>
                            <p className="major">B. Eng in Computer Engineering</p>
                        </div>
                        <div className="">
                            <p className="ed-location mb-1">Bambili, Cameroon</p>
                            <p className="ed-date">Nov 2019 - Dec 2023</p>
                        </div>
                    </div>
                </div>

                <div className="resume-extracurricular mb-6">
                <div className="title-container">
                            <div className="text-title mr-2"><h3 className="sub-heading"><span>Ext</span>racurricular Activity</h3></div>
                            <div className="divider"></div> 
                    </div>
                    
                    <div className="activities">
                        <div className="activity mb-4">
                            <div className="extra">
                                <div className="ext mb-2">
                                    <div className="org">
                                        <p className="ex-com mb-1">Google Developer Student Clubs, University of Bamenda</p>
                                        <p className="ex-pos">Lead</p>
                                    </div>
                                    <div className="location">
                                        <p className="ex-location mb-1">Bambili, Cameroon</p>
                                        <p className="ex-date">Aug 2020 - Aug 2021</p>
                                    </div>
                                </div>
                                <div className="tasks pl-10">
                                    <ul>
                                        <li>Grew the student tech community from 10 to over 100 active individuals.</li>
                                        <li>Reformed a knowledge sharing in peer-to-peer learning environment.</li>
                                        <li>Took part in the Google Developer Student Clubs Solution Challenge and built the ”Flow” mobile app to help 90% of the student population that face a water crisis to find clean water.</li>
                                        <li>Promoted open source development and organized up to 20 technical hands-on workshops.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="activity mb-4">
                            <div className="extra">
                                <div className="ext mb-2">
                                    <div className="org">
                                        <p className="ex-com mb-1">WAAW Foundation</p>
                                        <p className="ex-pos">Chapter Lead</p>
                                    </div>
                                    <div className="location">
                                        <p className="ex-location mb-1">Bamenda, Cameroon</p>
                                        <p className="ex-date">Aug 2021 - Present</p>
                                    </div>
                                </div>
                                <div className="tasks pl-10">
                                    <ul>
                                        <li>Recruit volunteers to impact teenage girls in secondary school by educating them about STEM and the opportunities ahead.</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
