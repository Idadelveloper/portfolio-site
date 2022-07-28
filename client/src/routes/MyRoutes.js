import React, {useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import NotFoundPage from '../pages/NotFoundPage';
import SingleBlog from '../pages/SingleBlog';
import ReactGA from 'react-ga';


export default function MyRoutes() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/blog/" element={<Blog />} />
                <Route path="/blog/:slug" element={<SingleBlog />} />
                <Route path="/contact" element={<Contact />} />
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="*" element={<Navigate to ="*" />}/>
            </Routes>
        </Router>
    )
}
