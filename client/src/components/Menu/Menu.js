import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, ...props }) => {
    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;
  return (
      <div>
        
        <StyledMenu open={open} aria-hidden={!isHidden} {...props} className="menu">
            <div className="menu-circle"></div>
            <a href="/" tabIndex={tabIndex}>Home</a>
            <a href="/about" tabIndex={tabIndex} >About</a>
            <a href="/projects" tabIndex={tabIndex}>Projects</a>
            <a href="/resume" tabIndex={tabIndex}>Resume</a>
            <a href="/blog" tabIndex={tabIndex}>Blog</a>
            <a href="/contact" tabIndex={tabIndex}>Contact</a>
        </StyledMenu>
    </div>
  )
}
Menu.propTypes = {
    open: bool.isRequired,
  }

export default Menu;