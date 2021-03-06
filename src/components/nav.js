import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
const SubNavheader = styled.div`
    font-size: .6em;
    list-style: none;
    display: grid;
    grid-template-columns: 60px 73px 98px ;
    justify-content: end;
    font-family: 'LabGrotesque-Light';
    align-items:center;
    padding:0 ;
    text-align: right;
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
        </SubNavheader>
      <div className="navbar-start has-text-centered">
  

        <ul>
          <li className="dropdown">
            <Link className="navbar-item" to="leadership">
              Professionals &#9660;
            </Link>

            <ul className="dropdown-content">
                <li><Link to="chronic-wounds">Chronic Wounds</Link></li>
                <li><Link to="actigraft">Product</Link></li>
                <li><Link to="technology">Technology</Link></li>
                <li><Link to="resources">Resources</Link></li>
                <li><Link to="testimonials">Testimonials</Link></li>
           </ul>
           
          </li>
          
          <li className="dropdown">
            <Link className="navbar-item" to="patients">
              Patients
            </Link>

          </li>
          <li>
            <Link className="navbar-item" to="actigraft">
              Product
            </Link>
          </li>
          <li className="dropdown">
            <Link className="navbar-item" to="about-us">
              About &#9660;
            </Link>
            <ul className="dropdown-content">
                <li><Link to="about">Company Overview</Link></li>
                <li><Link to="leadership">Leadership</Link></li>
                <li><Link to="careers">Careers</Link></li>
                <li><Link to="testimonials">Testimonials</Link></li>
           
           </ul>
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