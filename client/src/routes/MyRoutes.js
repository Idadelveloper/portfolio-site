import React, {Fragment} from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import NotFoundPage from '../pages/NotFoundPage';

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
                <Route path="*" element={<NotFoundPage />} />
                <Route path="*" element={<Navigate to ="*" />}/>
            </Routes>
        </Router>
    )
}
