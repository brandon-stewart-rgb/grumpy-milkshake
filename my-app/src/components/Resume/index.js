import React from "react";
import Footer from '../Footer';

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
              <form action="example.docs">
                <button className="button">
                  Download Resume&emsp;<i className="fad fa-download fa-lg"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
  </section>

    )
}

export default Resume;