import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import NotFound from '../components/Error/NotFound'
import Footer from '../components/Footer/Footer'

export default function NotFoundPage() {
    return (
        <div>
            <Navbar title="" />
            <NotFound />
            <Footer />
        </div>
    )
}
