import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
	return (
		<>
			<section className="hero is-large">
				<div className="hero-body">
					<div className="container has-text-centered">
						<h1 className="subtitle">Hey there, I'm</h1>
						<h2 className="title">brandon</h2>
						<h1 className="subtitle profession">
							Front End Developer
						</h1>
						<div className='is-hidden-mobile'>
						<Link to="/about">
							<button className="button  is-medium mx-5 greenbtn" data-aos="fade-up">
							About
							</button>
						</Link>
						<Link to="/portfolio">
							<button className="button  is-medium mx-5 greenbtn" data-aos="fade-down" >
								Portfolio
							</button>
						</Link>
						<Link to="/contact">
							<button className="button  is-medium mx-5 greenbtn" data-aos="fade-up">
								Contact
							</button>
						</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Hero;
