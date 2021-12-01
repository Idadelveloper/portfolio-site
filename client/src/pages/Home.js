import React from 'react';
import Banner from '../components/Banner';
import Services from '../components/Services/Services';
import Portfolio from '../components/HomePortfolio/Portfolio';

export default function Home() {
    return (
        <div>
            <Banner />
            <Services />
            <Portfolio />
        </div>
    )
}
