import React from 'react';
import Headers from '../../components/Headers';
import AboutImage1 from '../../images/about1.jpg';
import AboutImage2 from '../../images/about2.jpg';
import AboutImage3 from '../../images/about3.jpg';
import HeaderImage from '../../images/header_bg_1.jpg';
import './about.css';
const About = () => {
  return ( 
    <>
      <Headers title="About Us" image={HeaderImage}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nam, modi quae quisquam est placeat. Suscipit
      </Headers>


      <section className='about__story'>
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={AboutImage1} alt="AboutImage" />
          </div>
          <div className="about__section-content">
            <h2 className='about__section-ttile'>
              Our Story
            </h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident accusamus corporis dolorum esse laborum repellat id ea ullam voluptates tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum incidunt minima sequi aperiam, doloremque voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quae quasi molestiae, et sunt sint debitis quaerat nulla dolorum itaque? perspiciatis, neque et eligendi quis numquam ullam reiciendis mollitia aspernatur libero sed debitis modi cupiditate.</p>
          </div>
        </div>
      </section>


      <section className='about__story'>
        <div className="container about__mission-container">
          <div className="about__section-content">
            <h2 className='about__section-ttile'>
              Our Mission
            </h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident accusamus corporis dolorum esse laborum repellat id ea ullam voluptates tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum incidunt minima sequi aperiam, doloremque voluptate perspiciatis, neque et eligendi quis numquam ullam reiciendis mollitia aspernatur libero sed debitis modi cupiditate.</p>
          </div>
          <div className="about__section-image">
            <img src={AboutImage2} alt="AboutImage" />
          </div>
        </div>
      </section>


      <section className='about__story'>
        <div className="container about__vision-container">
          <div className="about__section-image">
            <img src={AboutImage3} alt="AboutImage" />
          </div>
          <div className="about__section-content">
            <h2 className='about__section-ttile'>
              Our Vision
            </h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident accusamus corporis dolorum esse laborum repellat id ea ullam voluptates tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum suscipit quos aperiam esse molestias, error facere! Asperiores, ipsum dicta!. Ipsum incidunt minima sequi aperiam, doloremque voluptate perspiciatis, neque et eligendi quis numquam ullam reiciendis mollitia aspernatur libero sed debitis modi cupiditate.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;