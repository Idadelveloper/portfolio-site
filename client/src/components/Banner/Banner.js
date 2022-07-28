import React, { useState, useRef } from 'react';
import './Banner.css'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../global';
import { theme } from '../../theme';

import LeftBackground from '../../assets/3d-top-right.png'
import RightBackground from '../../assets/3d-bottom-left.png'

import Menu from '../Menu/Menu';
import Burger from '../Burger/Burger';
import { useOnClickOutside } from '../../hooks';
import Navbar from '../Navbar/Navbar';

export default function Banner() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    return (
        <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
            <div className="banner" >
                
                <div className="">
                    <div ref={node}>
                        <Burger open={open} setOpen={setOpen} className="home-burger" />
                        <Menu open={open} setOpen={setOpen} className="home-menu" style={{"height": "100%"}} />
                    </div>
                    
                    <img src={LeftBackground} alt="" className="img1 absolute" />
                    <div className="circle circle1"></div>
                    <h1 className="text-left p-10 idadel">Ida<br/>Delphine</h1>
                    <div className="circle circle2"></div>
                    <div className="intro mx-5">
                        <p className="home-greeting">Hello 👋, I'm happy you found me. I'm curently a computer engineering student and developer based in Cameroon. Just a nerd that enjoys coding and loves costumizing her development environment. I'm interested in devising better problem-solving methods to solve challenging tasks, learning new technologies and tools when the need arises.</p>
                    </div>
                    <img src={RightBackground} alt=""className="img2 absolute object-right-bottom" />
                </div>
            </div>
        </>
    </ThemeProvider>
    )
}
