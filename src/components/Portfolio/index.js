import React from "react";
import Footer from '../Footer';
import Project from '../Project';

function Portfolio() {
    return (
      <section className="project" >
      	<section class="hero is-primary">
			  <div class="hero-body">
				  <p class="subtitle">Portfolio</p>
			  </div>
		  </section>

        <div className="section-dark my-work" id="my-work">
          <div className="container">
            <div className="columns is-multiline" data-aos="fade-in" data-aos-easing="linear" >

              <div className="column is-12">
                <h1 className="title has-text-centered section-title">My Work</h1>
              </div>

            <Project/>

            </div>
          </div>
        </div>
        <Footer />
  </section>
    )
}

export default Portfolio;


