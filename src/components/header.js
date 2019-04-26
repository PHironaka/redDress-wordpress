import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Nav from './nav'
import RedressLogo from './logo'
import styled from 'styled-components';
import Search from "./search"

const StyledHeader = styled.header`
  z-index:10000;
  position:relative;
  max-width: 1200px;
  margin: 8px auto 16px;
  padding: 0 1em;
  height:95px;

  .search {
    display:none;
  }
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
const Header = ({siteTitle }) => (

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
    <Nav />
  </div>
  <Search searchIndex={data.siteSearchIndex.index} />

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
