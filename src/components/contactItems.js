import React from 'react'
import { Link } from "gatsby";
import styled from 'styled-components';
import Phone from './phoneIcon'
import Email from './emailIcon'
import Flag from './usFlag'
import Globe from './globe'

const Items = styled.div`
    display: grid;
    grid-template-columns: repeat(4,auto);
    grid-gap:4em;

    @media screen and (max-width: 750px) {
    grid-template-columns: repeat(2,auto);


    }

    span {
        display: block;
    }
    

    svg {
        max-width:50px;
    }

    p {
        margin-bottom:0 !important;
    }
`



const ContactItems = class extends React.Component {
    render() {
      return (
  
    <Items>
        <div>
        <Phone />
        <span>Call Us </span>
        <p>+1-800-674-9614</p>
        </div>
        <div>
        <Email />
        <span>Email </span>
        <p>+1-800-674-9614</p>
        </div>
        <div>
        <Flag />
        <span>USA</span>
        <p>822 A1A North Ste 310</p>
        <p>Ponte Vedra Beach, FL 32082 </p>
        </div>
        <div>
        <Globe />
        <span>International</span>
        <p>Shkedim 11 st. Pardes-Hanna</p>
        <p> Israel</p>

        </div>
    </Items>
  )}
}

export default ContactItems
