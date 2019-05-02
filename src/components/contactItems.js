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
    

    svg {
        max-width:50px;
    }

    p {
        max-width:100px;
    }
`



const ContactItems = class extends React.Component {
    render() {
      return (
  
    <Items>
        <div>
        <Phone />
        <p>Call Us +1-800-674-9614</p>
        </div>
        <div>
        <Email />
        <p>Email Us+1-800-674-9614</p>
        </div>
        <div>
        <Flag />
        <p>USA822 A1A North Ste 310
Ponte Vedra Beach, FL 32082 USA</p>
        </div>
        <div>
        <Globe />
        <p>InternationalShkedim 11 st. 
Pardes-Hanna
Israel</p>
        </div>
    </Items>
  )}
}

export default ContactItems
