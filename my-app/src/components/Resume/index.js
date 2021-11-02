import React from "react";
import Footer from '../Footer';

function Resume() {
    return (
      <>
      	<section class="hero is-primary">
			<div class="hero-body">
				<p class="subtitle">Resume</p>
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
              <h2 className="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et doloremagna aliqua
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et doloremagna aliqua
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et doloremagna aliqua
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et doloremagna aliqua
              </h2>
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
  </>

    )
}

export default Resume;