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
            <a href="/" tabIndex={tabIndex}>About</a>
            <a href="/" tabIndex={tabIndex}>Portfolio</a>
            <a href="/" tabIndex={tabIndex}>Services</a>
            <a href="/" tabIndex={tabIndex}>Blog</a>
            <a href="/" tabIndex={tabIndex}>Contact</a>
        </StyledMenu>
    </div>
  )
}
Menu.propTypes = {
    open: bool.isRequired,
  }

export default Menu;