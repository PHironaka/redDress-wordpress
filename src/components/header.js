
import PropTypes from "prop-types"
import React from "react"
import Nav from './nav'
import RedressLogo from './logo'
import styled from 'styled-components';
import { StaticQuery } from "gatsby"
import Search from "./search"


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

const NavItems = styled.div`
    grid-template-columns: 1fr 20px;
    display: grid;
    grid-gap:1em;

`

const Header = () => (
  <StaticQuery
  query={graphql`
    query SearchIndexQuery {
      siteSearchIndex {
        index
      }
    }
  `}
    render={data => (
  <StyledHeader>
  <div className="bar">
      <RedressLogo />
      <NavItems>
    <Nav />
  <Search searchIndex={data.siteSearchIndex.index} />
  </NavItems>
  </div>
</StyledHeader>
)}
/>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header