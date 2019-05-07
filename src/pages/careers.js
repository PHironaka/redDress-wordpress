import React, { Component } from "react"
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Benefits from '../components/benefits'
import Growth from '../components/growth'
import Purpose from '../components/purpose'
import FadeIn from 'react-fade-in';

const NewsPage = styled.div`
  padding: 0 2em;
  margin-top: -51px;

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
      margin:0 0 20px;
  }

  h3 {
        font-size:1.8em;
      }

      
  .acti-item {
      display:grid;
      grid-template-columns: repeat(2, auto);
      grid-gap:2em;
      border-top:1px solid;
      padding:17px 0 8px;

      

      &.last {
        border-bottom:1px solid;
      }
      
    }


`

const NewsContainer = styled.div`
  margin:2em 0;
  padding:1em 0;

    p {
      max-width:750px;
    }
 
`

const CareerHeader = styled.h3 `
    font-size:1.8em;
    margin-bottom:2em;
`
const Jobs = styled.div`
    background: #F7F7F7;
    padding:2em 0;
    width:100vw;
    margin-left: calc(50% - 8px - 50vw);
    position: relative;
`

const JobContainer = styled.div`
    max-width: 1200px;
      margin: 0 auto;
      padding: 0 3em;
`

const Advantages = styled.div`
    margin-top:3em;
      display:grid;
      grid-template-columns: repeat(3, auto);
      grid-gap:3em;

      @media screen and (max-width: 750px) {
      grid-template-columns: 1fr;
    }

      p {
        max-width:300px;
      }

      svg {
        max-width:60px;
      }
  
  h3 {
    grid-column:1/-1;
  }
`

class News extends Component {
    componentDidMount() {
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.actigraft-1'), 0);
        if ($navbarBurgers.length > 0) {
      
            $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
              const target = el.dataset.target;
              const $target = document.getElementById(target);
      
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');
      
            });
          });
        }
     
        const $dropdownMenu2 = Array.prototype.slice.call(document.querySelectorAll('.actigraft-2'), 0);
        if ($dropdownMenu2.length > 0) {
      
            $dropdownMenu2.forEach( el => {
            el.addEventListener('click', () => {
              const target = el.dataset.target;
              const $target = document.getElementById(target);
      
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');
      
            });
          });
        }
     
        const $dropdownMenu3 = Array.prototype.slice.call(document.querySelectorAll('.actigraft-3'), 0);
        if ($dropdownMenu3.length > 0) {
      
            $dropdownMenu3.forEach( el => {
            el.addEventListener('click', () => {
              const target = el.dataset.target;
              const $target = document.getElementById(target);
      
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');
      
            });
          });
        }
     
      }
     
         render() {
           const data = this.props.data

    return (
  <Layout>
    <SEO title="News" />
    <NewsPage>
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
                 
               }} >
       <h1
                 className="has-text-weight-bold is-size-1"
                 style={{
                 color: 'white',
                 }}
               >Careers</h1>
      </div>
      <FadeIn transitionDuration={500}>
        <NewsContainer>
                <div>
                    <h2>Join the RedDress Team</h2>
                    <p>At RedDress, we’re always looking for creative, collaborative, innovate people to join our dynamic, quickly growing company. If you’re interested in joining the team, take a look at our open career opportunities and send us your resume!</p>
            
                </div>
       

        </NewsContainer>

         <Jobs>
             <JobContainer>
        <CareerHeader>Job Openings</CareerHeader>
           
        <div class="acti-item">
        <div>
        <h3>Job #1 </h3>
        </div>
        <div className="actigraft-1" data-target="actiNav1">
        <span className="plus-1"></span>
          <span className="plus-2"></span>
        </div>
        <div id="actiNav1" className="actiNav1">
           
            <ul>
            <h4> 
            Efficient Wound Treatment
            </h4>
              <li>
              Provides the wound with an optimal, natural healing environment, allowing the healing process to proceed unhindered.
              </li>
              <li>
              Weekly vs. daily application saves facility staff nursing time.              </li>
              <li>
              Published results of 72% complete healing within 12 weeks.              </li>
              <li>
              Provides the wound with an optimal, natural healing environment, allowing the healing process to proceed unhindered.
              </li>
            </ul>

            <ul>
            <h4> 
            Simplified Procedures
            </h4>
              <li>
              Single-use, state-of-the-art, autologous graft wound care solution.
              </li>
              <li>
              Designed with nurses in mind, ActiGraft can be easily prepared at the patient's bedside in 12 minutes.              </li>
              <li>
              Ready to use right out of the box. Eliminates need for complex processing, temperature monitoring or storage.
           </li>
         
            </ul>

            <ul>
            <h4> 
            Reduced Costs
            </h4>
              <li>
              Because ActiGraft uses the patient’s own blood, we aren’t required to register as a tissue donor bank or go through the regulatory recording processes of skin substitutes. This reduces administration and documentation requirements.              </li>
              <li>
              No capital equipment requirements.
            </li>
              <li>
              Reduced costs compared to other chronic wound treatments.              </li>
            
            </ul>

            <ul>
            <h4> 
            Increased Patient Safety and Comfort
            </h4>
              <li>
              Created from the patient's blood, assuring safe and effective management of the wound.  </li>
              <li>
              Significantly faster healing with less wound interaction and patient pain.
            </li>
              <li>
              Patients have reported reduced pain and improved quality of life. Unlike some other dressings, ActiGraft doesn’t abrade or irritate the skin’s dermal layer.           </li>
            
            </ul>



          </div>
        </div>


        <div class="acti-item">
        <div>
        <h3>Job #2 </h3>
        </div>
        <div className="actigraft-2" data-target="actiNav2">
          <span className="plus-1"></span>
          <span className="plus-2"></span>
        </div>
        <div id="actiNav2" className="actiNav2">
        <ul>
            <h4> 
            ActiGraft can be used for a wide variety of hard-to-treat chronic wounds, including but not limited to:
            </h4>
              <li>
              Diabetic/Neuropathic ulcers
              </li>
              <li>
              Pressure Ulcers/Injury   
              </li>           
              <li>
              Venous Stasis Ulcers           
              </li>
              <li>
              Post-surgical wounds           
              </li>
              <li>
              Traumatic wounds           
              </li>
              <li>
              Skin Tears
              </li>
            </ul>

            <ul>
            <h4> 
            Contra Indicated in wounds with:
            </h4>
              <li>
              Untreated osteomyelitis
              </li>
              <li>
              Active infections
              </li>           
              <li>
              Cancer of the wound bed
              </li>
             
            </ul>
            
          </div>
        </div>
          


        <div class="acti-item last">
        <div>
        <h3>Job #3</h3>
        </div>
        <div className="actigraft-3" data-target="actiNav3">
          <span className="plus-1"></span>
          <span className="plus-2"></span>
        </div>
        <div id="actiNav3" className="actiNav3">
            <ul>
              <li>
              Radius of ActiGraft clot – 3cm (Diameter 6cm)
              </li>
              <li>
              Sq centimeters – 28.3cm
              </li>
              <li>
              15ml of blood required
              </li>
              <li>
              Storage conditions - Store in the original container at a controlled room temperature of 15°C (59°F) – 25°C (77°F). Protect from freezing and avoid excessive heat.
              </li>
            </ul>
          </div>
        </div>
        </JobContainer>
        </Jobs>
    <Advantages>
    <h3>Advantages of Working at Red Dress</h3>
    <div>
      <Benefits />
      <div>
      <span>Get Competitive Benefits</span>
      <p>
We offer competitive compensation, health benefits, retirement plans, and vacation policies. </p>
      </div>
      </div>

      <div>
      <Growth />
      <div>
      <span>Join a High-Growth Startup</span>


<p>We’re a dynamic, growing startup that’s all about fast-paced innovation and collaboration.  </p>
      </div>
      </div>
     
    <div>
      <Purpose />
      <div>
      <span>Work with Purpose</span>
      <p>We’re here to revolutionize the healthcare industry for both patients and medical professionals.
      </p>
      </div>
 
    </div>
   
    </Advantages>

    </FadeIn>
     
    </NewsPage>
  </Layout>
    )
  }
}


export default News

