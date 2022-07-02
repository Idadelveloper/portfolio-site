import React from 'react';
import Banner from '../components/Banner/Banner';
import Skill from '../components/Skills/Skill';
import Portfolio from '../components/HomePortfolio/Portfolio';
import Resume from '../components/HomeResume/Resume';
import ContactAbout from '../components/ContactAbout/ContactAbout';
import Footer from '../components/Footer/Footer';

export default function Home() {
    return (
        <div>
            <Banner />
            <Skill />
            <Portfolio />
            <Resume />
            <ContactAbout />
            <Footer />
        </div>
    )
}
