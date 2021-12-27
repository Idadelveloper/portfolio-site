import React, { useState, useRef } from 'react';
import './Navbar.css'
import Menu from './Menu/Menu'
import Burger from './Burger/Burger'
import { useOnClickOutside } from '../hooks'

export default function Navbar(props) {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    return (
        <div className="nav-bar">
            <div className="page-title">
                <h1>{props.title}</h1>
            </div>
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
        </div>
    )
}
