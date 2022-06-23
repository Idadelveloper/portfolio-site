import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, ...props }) => {
    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;
  return (
      <div>
        
        <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
            <div className="menu-circle"></div>
            <a href="/" tabIndex={tabIndex}>Home</a>
            <a href="/about" tabIndex={tabIndex} >About</a>
            <a href="/projects" tabIndex={tabIndex}>Portfolio</a>
            <a href="#services" tabIndex={tabIndex}>Services</a>
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