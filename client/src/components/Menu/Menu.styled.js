import styled from 'styled-components';
import SideBackground from '../../assets/3d-left.png'

export const StyledMenu = styled.nav `
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryPurple};
  background-image: url(${SideBackground});
  background-repeat: no-repeat;
  background-size: 100vh 100%;
  background-position: right;
  height: 100vh;
  text-align: center;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
    transition: color 0.3s linear;

  .left-img {
    height: 100vh;
  }

  .menu-circle {
      width: 20rem;
      height: 20rem;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.primaryLight};
  }
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      background-image: none;
    }
    `