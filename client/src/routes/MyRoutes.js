import React, {Fragment} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

export default function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route exact path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}
