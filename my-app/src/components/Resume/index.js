import React from "react";
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function Resume() {
    return (
      <section className="resume">
                <section className="hero is-primary">
              <div className="hero-body">
                <p className="subtitle">Resume</p>
              </div>
            </section>
        <div className="section-dark resume">
        <div className="container">
          <div
            className="columns is-multiline"
            data-aos="fade-in"
            data-aos-easing="linear"
          >
            <div className="column is-12 about-me">
              <h1 className="title has-text-centered section-title">
                View My Resume
              </h1>
            </div>

            <div className="column is-10 has-text-centered is-offset-1">
              <div className='box'>
              <p className= 'subtitle'>
               Please feel free to download my resume below, it has all of my current contact info, stats, background, likes, dislikes and generalizations in general.
              </p>
              </div>
              
                <Link className="button" target='_blank' to='/files/Brandon_Stewart_2021.pdf'>
                  Download Resume&emsp;<i className="fad fa-download fa-lg"></i>
                </Link>
            
            </div>
          </div>

          <div className="section-light skills" id="skills">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-12 about-me">
              <h1 className="title has-text-centered section-title">Skills</h1>
            </div>
            <div
              className="column is-6"
              data-aos="fade-right"
              data-aos-easing="linear"
            >
              <h1>Adobe PhotoShop</h1>
              <progress className="progress" value="85" max="100">30%</progress>
              <h1>Adobe Illustrator</h1>
              <progress className="progress" value="65" max="100">30%</progress>
              <h1>Visual Studio Code</h1>
              <progress className="progress" value="65" max="100">45%</progress>
              <h1>Nodejs</h1>
              <progress className="progress" value="75" max="100">60%</progress>
            </div>
            <div
              className="column is-6"
            
              data-aos-easing="linear"
              data-aos="fade-left"
            >
              <h1>HTML</h1>
              <progress className="progress" value="95" max="100">30%</progress>
              <h1>CSS</h1>
              <progress className="progress" value="95" max="100">30%</progress>
              <h1>JS</h1>
              <progress className="progress" value="50" max="100">45%</progress>
              <h1>React</h1>
              <progress className="progress" value="70" max="100">60%</progress>
            </div>
          </div>
        </div>
      </div>




        </div>
      </div>
      <Footer />
  </section>

    )
}

export default Resume;