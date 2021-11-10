import React from "react";
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import doubleTwigs from '../../assets/images/double-twigs.png';
import plainCreature from '../../assets/images/plain-creature.png';
import paintHeadlights from '../../assets/images/paint-headlights.png';
import describeBamboo from '../../assets/images/describe-bamboo.png';
import exerciseDoubts from '../../assets/images/exercise-doubts.png';

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
            <div className="columns is-multiline" data-aos="fade-in" data-aos-easing="linear" >

              <div className="column is-12">
                <h1 className="title has-text-centered section-title">My Work</h1>
              </div>



              <div className="column is-3">

           
              <div className="acontent">
                    <div className="acontent-overlay"></div>
                    <img className="acontent-image" src={doubleTwigs}/>
                    <div className="acontent-details fadeIn-bottom fadeIn-left">
                      <h3>Social Network API</h3>
                      <a className='project-link' target='_blank' rel="noreferrer"  href='https://github.com/brandon-stewart-rgb/double-twigs'>View Project</a> <br />
                      <a className='project-link' target='_blank'  rel="noreferrer"  href='https://watch.screencastify.com/v/wX1udNp9IjicnJr32BK6'>View Demo</a>
                    </div>
                </div>
 
              
              </div>
              <div className="column is-3">
             

              <div className="acontent">
                    <div className="acontent-overlay"></div>
                    <img className="acontent-image" src={plainCreature}/>
                    <div className="acontent-details fadeIn-bottom fadeIn-left">
                      <h3>MVC Tech Blog</h3>
                      <a className='project-link' target='_blank' rel="noreferrer"  href='https://github.com/brandon-stewart-rgb/plain-creature'>View Project</a> <br />
                      <a className='project-link' target='_blank'  rel="noreferrer"  href='https://tech-blog-rgb.herokuapp.com/'>View Site</a>
                    </div>
                </div>


              </div>
              <div className="column is-3">
             
              <div className="acontent">
                    <div className="acontent-overlay"></div>
                    <img className="acontent-image" src={paintHeadlights}/>
                    <div className="acontent-details fadeIn-bottom fadeIn-left">
                      <h3>ORM E-Commerce Back End</h3>
                      <a className='project-link' target='_blank' rel="noreferrer" href='https://github.com/brandon-stewart-rgb/paint-headlights'>View Project</a> <br />
                      <a className='project-link' target='_blank' rel="noreferrer"  href='https://drive.google.com/file/d/1eGxkZlhuXVClH0YBLuteREh8NIXf1bed/view/'>View Demo</a>
                    </div>
                </div>
    
              </div>
              <div className="column is-3">
                  
                <div className="acontent">
                <div className="acontent-overlay"></div>
                <img className="acontent-image" src={describeBamboo}/>
                <div className="acontent-details fadeIn-bottom fadeIn-left">
                  <h3>Employee Manager</h3>
                  <a className='project-link' target='_blank' href='https://github.com/brandon-stewart-rgb/describe-bamboo'>View Project</a> <br />
                  <a className='project-link' target='_blank'  href='https://drive.google.com/file/d/1xHhYsSifbOb68_elTleCt8xl9z5Xmrky/view'>View Demo</a>
                </div>
                </div>
  
 
              </div>
              <div className="column is-3">

      <div className="acontent">
       <div className="acontent-overlay"></div>
       <img className="acontent-image" src={exerciseDoubts}/>
       <div className="acontent-details fadeIn-bottom fadeIn-left">
         <h3>Note Taker</h3>
         <a className='project-link' target='_blank' href='https://github.com/brandon-stewart-rgb/exercise-doubts'>View Project</a> <br />
         <a className='project-link' target='_blank'  href='https://peaceful-garden-28233.herokuapp.com/'>View App</a>
       </div>
       </div>

              </div>
              <div className="column is-3">
           
              </div>
              <div className="column is-3">
            
              </div>
              <div className="column is-3">
             
              </div>

            </div>
          </div>
        </div>
        <Footer />
  </section>
    )
}

export default Project;


