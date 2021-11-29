import React, { useState, useRef } from 'react';
import './Banner.css'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../global';
import { theme } from '../theme';
import Menu from './Menu/Menu';
import Burger from './Burger/Burger';
import { useOnClickOutside } from '../hooks';

import LeftBackground from '../assets/3d-top-right.png'
import RightBackground from '../assets/3d-bottom-left.png'

export default function Banner() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    return (
        <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
            <div className="banner" >
                <div className="relative">
                    
                    <img src={LeftBackground} alt="" className="img1 absolute" />
                    <div className="circle circle1"></div>
                    <h1 className="text-left p-10 idadel">Ida<br/>Delphine</h1>
                    <div className="circle circle2"></div>
                    <div className="intro">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <img src={RightBackground} alt=""className="img2 absolute object-right-bottom" />
                </div>
            </div>
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
        </>
    </ThemeProvider>
    )
}
