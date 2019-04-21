import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  margin: -51px 0 0;
  grid-gap: 3em;
  padding: 0;

  h1{
      position:relative;
      top:100px;
      font-size:6em;
      padding: 0 36px;
      max-width: 1200px;
      margin: 0 auto;

      @media screen and (max-width: 750px) {
        font-size:2.5em;
        margin: 0;

    }
  }

  li {
    margin: 0 2em;
    display: block;
  }

  .leader-intro {
    margin-top:2em;
    padding: 0 2em;
    max-width:40em;

    h2 {
      font-size:3em;
      margin-bottom:0;
      line-height:1;
    }
  }

  .leader-profile {
      display:grid;
      grid-template-columns: repeat(2, auto);
      grid-gap:2em;
      padding: 0 2em;
      margin: 2em 0 0;

      @media screen and (max-width: 850px) {
          grid-template-columns: 1fr;
          grid-gap:2em;
        }

      &:nth-child(4) {
        border-bottom: 1px solid;
        padding-bottom:40px;
      }

    .leader-profile--info {
        align-self:center;
        h3 {
          font-size:2em;
          line-height:1;
          margin:0;
          
        }
      }
      
  }

  .advisory {
    display:grid;
      grid-template-columns: repeat(3, auto);
      grid-gap:3em;
      padding: 0 2em;
      margin: 0 0 8em;

      @media screen and (max-width: 850px) {
          grid-template-columns: 1fr;
          grid-gap:2em;
        }
        
      h2 {
        grid-column:1/-1;
        margin-top:1em;
      font-size:3em;

      }
  }


`;


const LeadershipProfile = ({ children }) => <Container>{children}</Container>;

LeadershipProfile.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LeadershipProfile;
