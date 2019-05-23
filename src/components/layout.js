import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import styled from 'styled-components'
import Header from "./header"
import Footer from "./footer"

const theme = {
  red: '#FF0000',
  black: '#000',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1200px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  position: relative;
`;
const GlobalStyle = createGlobalStyle`
 html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }


@font-face {
  font-family: 'LabGrotesque-Light';
  src: url('https://cdn.shopify.com/s/files/1/2140/7529/files/LabGrotesque-Light.eot?7269070042924993380');
  src: url('https://cdn.shopify.com/s/files/1/2140/7529/files/LabGrotesque-Light.eot?7269070042924993380?#iefix') format('embedded-opentype'),
       url('https://cdn.shopify.com/s/files/1/2140/7529/files/LabGrotesque-Light.ttf?7269070042924993380') format('truetype'),
       url('https://cdn.shopify.com/s/files/1/2140/7529/files/LabGrotesque-Light.woff?7269070042924993380') format('woff'),
       url('https://cdn.shopify.com/s/files/1/2140/7529/files/LabGrotesque-Light.woff2?7269070042924993380') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'LabGrotesque-Bold';
  src: url('https://cdn.shopify.com/s/files/1/2140/7529/files/LabGrotesque-Bold.eot?7269070042924993380');
  src: url('https://cdn.shopify.com/s/files/1/2140/7529/files/LabGrotesque-Bold.eot?7269070042924993380?#iefix') format('embedded-opentype'),
       url('https://cdn.shopify.com/s/files/1/2140/7529/files/LabGrotesque-Bold.ttf?7269070042924993380') format('truetype'),
       url('https://cdn.shopify.com/s/files/1/2140/7529/files/LabGrotesque-Bold.woff?7269070042924993380') format('woff'),
       url('https://cdn.shopify.com/s/files/1/2140/7529/files/LabGrotesque-Bold.woff2?7269070042924993380') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'LabGrotesque-Black';
  src: url('https://cdn.shopify.com/s/files/1/2140/7529/files/LabGrotesque-Black.eot?21');
  src: url('https://cdn.shopify.com/s/files/1/2140/7529/files/LabGrotesque-Black.eot?21?#iefix') format('embedded-opentype'),
       url('https://cdn.shopify.com/s/files/1/2140/7529/files/LabGrotesque-Black.ttf?21') format('truetype'),
       url('https://cdn.shopify.com/s/files/1/2140/7529/files/LabGrotesque-Black.woff?21') format('woff'),
       url('https://cdn.shopify.com/s/files/1/2140/7529/files/LabGrotesque-Black.woff2?21') format('woff2');
  font-weight: normal;
  font-style: normal;
}



@font-face {
  font-family: 'LabGrotesque-Regular';
  src: url('https://cdn.shopify.com/s/files/1/2140/7529/files/LabGrotesque-Regular.eot?7269070042924993380');
  src: url('https://cdn.shopify.com/s/files/1/2140/7529/files/LabGrotesque-Regular.eot?7269070042924993380?#iefix') format('embedded-opentype'),
       url('https://cdn.shopify.com/s/files/1/2140/7529/files/LabGrotesque-Regular.ttf?7269070042924993380') format('truetype'),
       url('https://cdn.shopify.com/s/files/1/2140/7529/files/LabGrotesque-Regular.woff?7269070042924993380') format('woff'),
       url('https://cdn.shopify.com/s/files/1/2140/7529/files/LabGrotesque-Regular.woff2?7269070042924993380') format('woff2');
  font-weight: normal;
  font-style: normal;
}

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    line-height: 1.6;
    font-family: 'LabGrotesque-Regular';
    overflow-x:hidden;
  }

  h1 {
    font-family: 'LabGrotesque-Black';

  }

  h2,h3,h4 {
    font-family: 'LabGrotesque-Bold';

  }

  p {
    font-family: 'LabGrotesque-Light';
    
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }

  img {
    max-width:100%;
  }
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
progress,
video {
  display: inline-block;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
progress {
  vertical-align: baseline;
}
[hidden],
template {
  display: none;
}
a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
a:active,
a:hover {
  outline-width: 0;
}
abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}
b,
strong {
  font-weight: inherit;
  font-weight: bolder;
}
dfn {
  font-style: italic;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
mark {
  background-color: #ff0;
  color: #000;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
img {
  border-style: none;
}
svg:not(:root) {
  overflow: hidden;
}
code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
figure {
  margin: 1em 40px;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
button,
input,
optgroup,
select,
textarea {
  font: inherit;
  margin: 0;
}
optgroup {
  font-weight: 700;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
[type="reset"],
[type="submit"],
button,
html [type="button"] {
  -webkit-appearance: button;
}
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  border: 1px solid silver;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}
legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.54;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

* {
  box-sizing: inherit;
}
*:before {
  box-sizing: inherit;
}
*:after {
  box-sizing: inherit;
}

ul {
  margin-left: 1.45rem;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  list-style-position: outside;
  list-style-image: none;
}
ol {
  margin-left: 1.45rem;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  list-style-position: outside;
  list-style-image: none;
}
dl {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
dd {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}

nav {
  background: transparent;
  top: 3px;
  height: 0;
  left: 83%;
  z-index: 1000;
  font-family: LabGrotesque-Bold;
  @media screen and (max-width: 800px) {
    max-width: 100%;
    position: relative !important;
    display: contents;
  }
}

.dropdown-content {
    display:none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    li {
      text-align:center;
      padding:10px 0;
    }
  }

  .dropdown:hover.dropdown-content {
    display: block;
  }

.navMenu {
  transition: height 350ms ease-in-out, opacity 750ms ease-in-out;
  transition: all 0.5s ease;
  transition-duration: 1s;

}

.navbar-brand {
  padding:0 1em;
}

.actiNav1, .actiNav2, .actiNav3 {
  display:none;
  transition: all 0.5s ease;
    transition-delay: 2s;
}

.actiNav2.is-active, .actiNav3.is-active, .actiNav1.is-active, .actiNav1.is-active {
  display: block;
	height: auto;
  opacity: 1;
  transition: all 0.5s ease;
  transition-delay: 2s;
}

.navbar-menu {
  display:none;
  @media screen and (min-width: 800px) {
    display: grid;
    
  }
}

.navbar-start {

  ul {
    padding:0 2em;
    max-width: 100%;
    list-style:none;
    display: grid;
    text-align:right;
    grid-template-columns: repeat(5, auto);
    grid-gap:2em;
    margin-top:10px;
    
    @media screen and (max-width: 800px) {
      display: block;
      padding:0 ;
      position:absolute;
      height:100vh;
      width:100vw;
      background:white;
      top:56px;
      left:0;
      margin:0;


    }
  }
 


  li {
    margin:  0;

  }
  
  


  .navbar-item {
    transition: all 0.3s ease 0s;
    position: relative;
    &:after {
      position: absolute;
      transition: .3s;
      content: '';
      width: 0;
      left: 50%;
      bottom: 0;
      top:22px;
      height: 2px;
      background: #333;
  }
  &:hover {
    &:after {
      width: 100%;
      left: 0;
      }
  }
    @media screen and (max-width: 800px) {
      display:block;
      text-align: center;
      margin: 1em 0;
      text-transform: uppercase;
    }
    
  }
}

.navbar-menu{
	transition: height 1s ease-in-out, opacity 1s ease-in-out;
}
.navbar-menu.is-active {
  display: block;
	height: auto;
  opacity: 1;
  z-index:10000;
}

.actigraft-1, .actigraft-2, .actigraft-3{

    color: #000;
    cursor: pointer;
    height: 3.25rem;
    position: relative;
    width: 3.25rem;
    margin-left: auto;
    transition: height 350ms ease-in-out, opacity 750ms ease-in-out;
    &.is-active {
    transition: height 350ms ease-in-out, opacity 750ms ease-in-out;
    transition: all 0.5s ease;
    transition-delay: 2s;
    }


    span {
      background-color: currentColor;
      display: block;
      height: 2px;
      left: calc(50% - 8px);
      position: absolute;
      -webkit-transform-origin: center;
      transform-origin: center;
      transition-duration: .2s;
      transition-property: background-color,opacity,-webkit-transform;
      transition-property: background-color,opacity,transform;
      transition-property: background-color,opacity,transform,-webkit-transform;
      transition-timing-function: ease-out;
      width:21px;

    &:nth-child(2) {
      top: calc(50% - 10px);
      transform: rotate(90deg);

    }

      &:first-child {
        top: calc(50% - 11px);
      }

      &:nth-child(3) {
        top: calc(50% + 9px);
    }
  }

}  

.actigraft-1, .actigraft-2, .actigraft-3 {
  &.is-active {
     transition-delay: 2s;
    transition: height .35s ease-in-out,opacity .75s ease-in-out;
    
    .plus-1 {
      opacity: 0;
      transform: rotate(40deg);
    }

    .plus-2 {
      top: 16px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    }

}
}

.navbar-burger {
  @media screen and (min-width: 800px) {
    display: none;
  }
    padding-top: 26px;
    color: #000;
    cursor: pointer;
    display: block;
    height: 3.25rem;
    position: relative;
    width: 3.25rem;
    margin-left: auto;
    transition-delay: 2s;
    transition: height .35s ease-in-out,opacity .75s ease-in-out;

    &.is-active {
     transition-delay: 2s;
    transition: height .35s ease-in-out,opacity .75s ease-in-out;
    
    .icon-1 {
      opacity: 0;
      transform: rotate(40deg);
    }
  
    .icon-2 {
      top: 26px;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
    }
  
    .icon-3 {
      transform: rotate(-42deg);
  }

    }


    span {
      background-color: currentColor;
      display: block;
      height: 1.5px;
      left: calc(50% - 8px);
      position: absolute;
      -webkit-transform-origin: center;
      transform-origin: center;
      transition-duration: .2s;
      transition-property: background-color,opacity,-webkit-transform;
      transition-property: background-color,opacity,transform;
      transition-property: background-color,opacity,transform,-webkit-transform;
      transition-timing-function: ease-out;
      width:36px;

      &.icon-1 {
      transform: translateY(-8px);
      animation-delay: 0.2s;
    }


      &.icon-3 {
        transform: translateY(8px);
        animation-delay: 250ms;
      }

   
  }

}

figure {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
pre {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 1.45rem;
  font-size: 0.85rem;
  line-height: 1.42;
  background: hsla(0, 0%, 0%, 0.04);
  border-radius: 3px;
  overflow: auto;
  word-wrap: normal;
  padding: 1.45rem;
}

td,
th {
  text-align: left;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
  font-feature-settings: "tnum";
  -moz-font-feature-settings: "tnum";
  -ms-font-feature-settings: "tnum";
  -webkit-font-feature-settings: "tnum";
  padding-left: 0.96667rem;
  padding-right: 0.96667rem;
  padding-top: 0.725rem;
  padding-bottom: calc(0.725rem - 1px);
}
th:first-child,
td:first-child {
  padding-left: 0;
}
th:last-child,
td:last-child {
  padding-right: 0;
}
tt,
code {
  background-color: hsla(0, 0%, 0%, 0.04);
  border-radius: 3px;
  font-family: "SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono",
    "Liberation Mono", Menlo, Courier, monospace;
  padding: 0;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
}
pre code {
  background: none;
  line-height: 1.42;
}
code:before,
code:after,
tt:before,
tt:after {
  letter-spacing: -0.2em;
  content: " ";
}
pre code:before,
pre code:after,
pre tt:before,
pre tt:after {
  content: "";
}
@media only screen and (max-width: 480px) {
  html {
    font-size: 100%;
  }
}



`


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Header />
        <ThemeProvider theme={theme}>
          <StyledPage>
          <Inner>{children}</Inner>
          <Footer />
          </StyledPage>
        </ThemeProvider>

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
