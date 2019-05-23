
import PropTypes from "prop-types"
import React from "react"
import Nav from './nav'
import RedressLogo from './logo'
import styled from 'styled-components';


const StyledHeader = styled.header`
  z-index:10000;
  position:relative;
  max-width: 1200px;
  margin: 8px auto 16px;
  padding: 0 1em;
  height:103px;
  .bar {
    display: grid;
    grid-template-columns: repeat(2,auto);
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  }
`
const Header = ({ siteTitle }) => (
  <StyledHeader>
  <div className="bar">
      <RedressLogo />
    <Nav />
  </div>
</StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header