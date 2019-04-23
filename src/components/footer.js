import React from 'react'
import { Link } from "gatsby";
import styled from 'styled-components';
import FooterNav from './footerNav';
import FooterLogo from './footerLogo';
import Bg from '../images/pattern.jpg';


const GlobalFooter = styled.footer`
  padding: 0 1em;
  z-index:10000;
  background: #9b507e;
  position:relative;
  color:white;
  margin-top:7em;

  svg {
    position: absolute;
    top: -50px;
    margin:0 auto;
  }

  .bar {
    display: grid;
    grid-template-columns: repeat(2,auto);
    align-items:center;
    grid-gap:3em;
    max-width: 1200px;
    margin: 0 auto;

    @media screen and (max-width: 1000px) {
          grid-template-columns: 1fr;
          grid-gap:2em;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
    @media screen and (max-width: 850px) {
          grid-template-columns: 1fr;
          grid-gap:2em;
    }
  }
`;

const Copyright = styled.div`
    font-family: 'LabGrotesque-Light';
    grid-column: 1/-1;
    text-align:center;
    display:grid;
    grid-template-columns: repeat(3,auto);
    font-size:12px;
    text-align:center;
    max-width: 730px;
    margin: 0 auto 4em;
    grid-gap:2em;

    @media screen and (max-width: 850px) {
        grid-gap:2em;
        text-align:left;
        margin: 0;
        grid-template-columns: repeat(1,auto);
        padding: 0 2em;

    }

    small {
        font-size:12px;
    }

    ul {
    display:grid;
    grid-template-columns: repeat(3,auto);
    list-style:none;
    padding: 0;
    grid-gap:2em;
    @media screen and (max-width: 850px) {
        grid-template-columns: 1fr;
        grid-gap:1em;
        margin: 0 0 2em;
    }

    a {
    color:white;

    }
    }
`


const Footer = class extends React.Component {
    render() {
      return (
  <GlobalFooter style={{
    backgroundImage: `url(${
    !!Bg
    ? Bg
    : Bg
    })`,
    minHeight:'400px',
    backgroundRepeat:'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginLeft:'calc(-50vw + 50% - 8px)',
    position:'relative', 
    width: '100vw',
    
  }}>
    <div className="bar">
      <FooterLogo />
      <FooterNav />
      <Copyright>
          <small>Copyright RedDress {new Date().getFullYear()} </small>
          <p>Built by Astronaut Monastery</p>
          <ul>
              <li><Link to="/leadership">Terms & Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/leadership">Privacy Center</Link></li>
          </ul>
      </Copyright>
    </div>
  </GlobalFooter>
  )}
}

export default Footer
