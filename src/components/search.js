import React, { Component } from "react"
import PropTypes from "prop-types"
import { Index } from "elasticlunr"
import { Link } from "gatsby"
import styled from 'styled-components';

const Icon = styled.svg`
  max-width:20px;
`

const SearchResults = styled.ul`
  li {
   list-style:none;
  }
`
// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }

  }
  componentDidMount() {
    // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.search-item'), 0);
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
      <div >
             <div className="search-item" data-target="searchForm">
          <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></Icon>
      </div>
      <div id="searchForm">
        <input
          style={{
            position: `relative`,
          }}
          type="text"
          placeholder="Type title words or tags"
          value={this.state.query}
          onChange={this.search}
        />
        <SearchResults
      
        >
          {this.state.results.map(page => (
            <li key={page.id}>
              <Link to={`/` + page.path}>{page.title}</Link>
              <div dangerouslySetInnerHTML={{ __html: page.excerpt }} />
            </li>
          ))}
        </SearchResults>
      </div>

 

</div>


    )
  }

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}

Search.propTypes = {
  searchIndex: PropTypes.object,
}