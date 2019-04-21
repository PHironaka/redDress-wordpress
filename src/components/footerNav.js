import React from 'react';
import { Link } from "gatsby";
import styled from 'styled-components';

const Navigation = styled.div`
  display: grid;
  grid-template-columns: repeat(5,auto);
  grid-gap:3em;
  @media screen and (max-width: 1050px) {
      grid-template-columns: repeat(3,auto);
      grid-gap:2em;
    }
  
  @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1,auto);
  }  

  h4 {
      margin:5px 0;
  }
  ul,li {
    list-style:none;
  }

  ul {
    padding:3em 0;
    @media screen and (max-width: 850px) {
      padding: 2em 0 0;

    }
  }
  li {
    padding:0;
    line-height:1.7;
    font-size:.9em;
  }

  a {
    font-family: 'LabGrotesque-Light';
    color: #fff;
  }
`

const FooterNav = class extends React.Component {
    render() {
      return (
  <Navigation>
      <ul>
        <h4>Healthcare Providers</h4>
        <li> <Link to="/chronic-wounds">Chronic Wounds</Link> </li>
        <li> <Link to="/about">Products</Link> </li>
        <li> <Link to="/about">Technology</Link> </li>
        <li> <Link to="/about">Resources</Link> </li>
        <li> <Link to="/about">Testimonials</Link> </li>
        <li> <Link to="/about">Events</Link> </li>
      </ul>
      <ul>
        <h4> Patients</h4>
        <li> <Link to="/about">Conditions</Link> </li>
        <li> <Link to="/about">Procedures</Link> </li>
        <li> <Link to="/about">Resource Center</Link> </li>
        <li> <Link to="/about">Testimonials</Link> </li>
      </ul>
      <ul>
        <h4> Product(s)</h4>
      </ul>
      <ul>
        <h4> About Us</h4>
        <li> <Link to="/about">Company</Link> </li>
        <li> <Link to="/about">Overview</Link> </li>
        <li> <Link to="/about">Professionals</Link> </li>
        <li> <Link to="/about">Leadership Team</Link> </li>
        <li> <Link to="/about">Medical Advisors</Link> </li>
        <li> <Link to="/about">Careers</Link> </li>
      </ul>
      <ul>
        <h4> Contact Us</h4>
        <li> <Link to="/about">Location & Form</Link> </li>
      </ul>

      </Navigation>
  )}
}

export default FooterNav
