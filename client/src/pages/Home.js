import React from 'react';
import Banner from '../components/Banner';
import Services from '../components/Services/Services';
import Portfolio from '../components/HomePortfolio/Portfolio';
import Resume from '../components/HomeResume/Resume';
import ContactAbout from '../components/ContactAbout/ContactAbout';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <Banner />
            <Services />
            <Portfolio />
            <Resume />
            <ContactAbout />
            <Footer />
        </div>
    )
}
