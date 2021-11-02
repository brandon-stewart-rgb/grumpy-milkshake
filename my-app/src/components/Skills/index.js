import React from "react";
import Footer from '../Footer';

function Skills() {
    return (
      <>
      	<section class="hero is-primary">
			<div class="hero-body">
				<p class="subtitle">Skills</p>
			</div>
		</section>
     
      <div className="section-light skills" id="skills">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-12 about-me">
              <h1 className="title has-text-centered section-title">Skills</h1>
            </div>
            <div
              className="column is-6"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <h1>Adobe PhotoShop</h1>
              <progress className="progress" value="85" max="100">30%</progress>
              <h1>Adobe Illustrator</h1>
              <progress className="progress" value="65" max="100">30%</progress>
              <h1>Visual Studio Code</h1>
              <progress className="progress" value="58" max="100">45%</progress>
              <h1>Nodejs</h1>
              <progress className="progress" value="70" max="100">60%</progress>
            </div>
            <div
              className="column is-6"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <h1>HTML</h1>
              <progress className="progress" value="95" max="100">30%</progress>
              <h1>CSS</h1>
              <progress className="progress" value="95" max="100">30%</progress>
              <h1>SASS</h1>
              <progress className="progress" value="70" max="100">45%</progress>
              <h1>React</h1>
              <progress className="progress" value="60" max="100">60%</progress>
            </div>
          </div>
        </div>
      </div>
       <Footer />
       </>

    )
}

export default Skills;