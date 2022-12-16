import React from 'react';
import './About.css';
import img from '../../../src/images/about.JPG'
import { Link } from 'react-router-dom';
import { Fade, Rotate, LightSpeed } from 'react-reveal';
const About = () => {
    return (
        <div className='bg lg:py-5'>
          <Rotate top left>
            <div className="title text-center">
                <h2>ABOUT <span className='about-text'>ME</span></h2>
                <span className='title_p'>I design and code beautiful things, and I love what I do.</span>
            </div>
            </Rotate>
            <div className="hero ">
  <div className="hero-content flex-col lg:flex-row mt-4">
    <Fade bottom big cascade>

    <img src={img} className=" lg:w-1/2 rounded-lg shadow-2xl" />
    </Fade>
    <LightSpeed left>
    <div className='ml-3'>
      <h1 className="text-5xl  font-bold text-white">Hello Sweet Client</h1>
      <p className="py-6 text-white">I am a professional Web Developer . 
                Having a Bachelors Degree in Computer Science .
                My skills: HTML, CSS, Bootstrap, Javascript, React JS,Node JS,Express JS,Firebase Authentication,MongoDB,

                If you need any assistance related to my services please feel free to contact me anytime as I'm always listening.

                I love to help People, solve their Problems and bring a smile on their face.
                </p>
                <h2 className='text'>Thank You So Much</h2>
      <button  className="btn btn-primary">
            <Link to={'/contract '}>Contact Me</Link> 
        </button>
    </div>
    </LightSpeed>
  </div>
</div>
        </div>
    );
};

export default About;