import React from "react";
import Footer from '../Footer';

function Project() {
    return (
      <section className="project" >
      	<section class="hero is-primary">
			<div class="hero-body">
				<p class="subtitle">Portfolio</p>
			</div>
		</section>
        <div className="section-dark my-work" id="my-work">
          <div className="container">
            <div
              className="columns is-multiline"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <div className="column is-12">
                <h1 className="title has-text-centered section-title">My Work</h1>
              </div>
              <div className="column is-3">
                <a href="/">
                  <figure
                    className="image is-2by1 work-item"
                    style={{ backgroundImage : `url('https://picsum.photos/320/180?image=0')`}}
                  ></figure>
                </a>
              </div>
              <div className="column is-3">
                <a href="/">
                  <figure
                    className="image is-2by1 work-item"
                    style={{backgroundImage: `url('https://picsum.photos/320/180?image=10')`}}
                  ></figure>
                </a>
              </div>
              <div className="column is-3">
                <a href="/">
                  <figure
                    className="image is-2by1 work-item"
                    style={{backgroundImage: `url('https://picsum.photos/320/180?image=20')`}}
                  ></figure>
                </a>
              </div>
              <div className="column is-3">
                <a href="/">
                  <figure
                    className="image is-2by1 work-item"
                    style={{backgroundImage: `url('https://picsum.photos/320/180?image=30')`}}
                  ></figure>
                </a>
              </div>
              <div className="column is-3">
                <a href="/">
                  <figure
                    className="image is-2by1 work-item"
                    style={{backgroundImage:` url('https://picsum.photos/320/180?image=40')`}}
                  ></figure>
                </a>
              </div>
              <div className="column is-3">
                <a href="/">
                  <figure
                    className="image is-2by1 work-item"
                    style={{backgroundImage:` url('https://picsum.photos/320/180?image=50')`}}
                  ></figure>
                </a>
              </div>
              <div className="column is-3">
                <a href="/">
                  <figure
                    className="image is-2by1 work-item"
                    style={{backgroundImage:` url('https://picsum.photos/320/180?image=60')`}}
                  ></figure>
                </a>
              </div>
              <div className="column is-3">
                <a href="/">
                  <figure
                    className="image is-2by1 work-item"
                    style={{backgroundImage: `url('https://picsum.photos/320/180?image=70')`}}
                  ></figure>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
  </section>
    )
}

export default Project;


