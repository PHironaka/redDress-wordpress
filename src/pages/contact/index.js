import React from "react";
import { navigate } from "gatsby-link";
import Layout from '../../components/Layout'
import SEO from '../../components/seo'
import ContactItems from '../../components/contactItems'
import styled from 'styled-components'
import FadeIn from 'react-fade-in';


const Contact = styled.div`
    margin: -51px 0px 0px;
    gap: 3em 3em;
    padding: 0 2em;


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

  h2 {
    font-size:3em;
    margin:1em 0 0;
  }

  p {
    margin-bottom:3em;
  }
  `

const FormContainer = styled.div`
    padding: 0 2em;
    max-width:1200px;
    margin: 0 auto;
`



function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
    <SEO title="Contact Us" />
    <Contact>
    <div className="full-width-image-container margin-top-0" style={{
                 backgroundImage: `url(
                  https://phiro.000webhostapp.com/wp-content/uploads/2019/05/static-head-contactb.jpg)`,
                 minHeight:'400px',
                 backgroundRepeat:'no-repeat',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 marginLeft:'calc(-50vw + 50% - 8px)',
                 position:'relative', 
                 width: '100vw',
                 
               }}>
               <h1
                 className="has-text-weight-bold is-size-1"
                 style={{
                 color: 'white',
                 }}
               >
                 Contact
               </h1>
          </div>
          <FadeIn transitionDuration={500}>

        <section className="section">
        
        <h2>Contact Us</h2>
        <p>Do you have questions about RedDress or ActiGraft? We’re here to help.</p>
        <ContactItems />
        <form
        style={{
          backgroundColor: `#F7F7F7`,
          minHeight:'400px',
          backgroundRepeat:'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginLeft:'calc(-50vw + 50% - 8px)',
          position:'relative', 
          width: '100vw',
          
        }}

          name="contact"
          method="post"
          action="/contact/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
        <FormContainer>
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>
          <div className="field">
            <label className="label" htmlFor={"name"} >First name</label>
            <div className="control">
              <input className="input" type={"text"} name={"name"} onChange={this.handleChange} id={"name"} required={true} />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={"name"} >Last name</label>
            <div className="control">
              <input className="input" type={"text"} name={"name"} onChange={this.handleChange} id={"name"} required={true} />
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor={"name"} >Title</label>
            <div className="control">
              <input className="input" type={"text"} name={"name"} onChange={this.handleChange} id={"name"} required={true} />
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor={"name"} >Practice/Facility</label>
            <div className="control">
              <input className="input" type={"text"} name={"name"} onChange={this.handleChange} id={"name"} required={true} />
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor={"email"}>Email</label>
              <div className="control">
                <input className="input" type={"email"} name={"email"} onChange={this.handleChange} id={"email"} required={true} />
              </div>
          </div>

          <div className="field">
            <label className="label" htmlFor={"email"}>Country</label>
              <div className="control">
                <input className="input" type={"email"} name={"email"} onChange={this.handleChange} id={"email"} required={true} />
              </div>
          </div>

          <div className="field">
            <label className="label" htmlFor={"email"}>State/Province/Region</label>
              <div className="control">
                <input className="input" type={"email"} name={"email"} onChange={this.handleChange} id={"email"} required={true} />
              </div>
          </div>

          <div className="field">
            <div className="control">
              <textarea placeholder="How can we help you?" className="textarea" name={"message"} onChange={this.handleChange} id={"message"} required={true} />
            </div>
          </div>
          <div className="field">
            <button className="button is-link" type="submit">Submit Form</button>
          </div>
          </FormContainer>
        </form>
     
        </section>
       </FadeIn>
    </Contact>

      </Layout>
    );
  }
}