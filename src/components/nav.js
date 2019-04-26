import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

const SubNavheader = styled.div`
    font-size: .7em;
    list-style: none;
    display: grid;
    grid-template-columns: 60px 73px 98px 20px;
    justify-content: end;
    font-family: 'LabGrotesque-Light';
    align-items:center;

    @media screen and (max-width: 800px) {
      position:absolute;
      top:56px;
      left:0;
      margin:0;
    }


    a {
      color:#666;
    }
`


const Navbar = class extends React.Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {
 
     // Add a click event on each of them
       $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {
 
         // Get the target from the "data-target" attribute
         const target = el.dataset.target;
         const $target = document.getElementById(target);
 
         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
 
       });
     });
   }
 }
 
 render() {
   return (
  
  <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
      <div className="navbar-brand">
        {/* Hamburger menu */}
        <div className="navbar-burger burger" data-target="navMenu">
          {/* <h3>Menu</h3> */}
          <span class="icon-1"></span>
          <span class="icon-2"></span>
          <span class="icon-3"></span>
        </div>
      </div>
      <div id="navMenu" className="navbar-menu">
      <SubNavheader>
          <li>
            <Link className="navbar-item" to="news">
              News
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="education">
              Support
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="reimbursement">
              Reimbursement
            </Link>
          </li>

          <li>
            <Link className="navbar-item" to="contact">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </Link>
          </li>
        </SubNavheader>
      <div className="navbar-start has-text-centered">
  

        <ul>
          <li>
            <Link className="navbar-item" to="leadership">
              Professionals
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="patients">
              Patients
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="actigraft">
              Product
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="about-us">
              About
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="contact">
              Contact
            </Link>
          </li>
          
        </ul>
      </div>
      
      </div>
  </nav>
  )}
}

export default Navbar