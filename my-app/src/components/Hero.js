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
							A Third of the Stack Developer
						</h1>
						<Link to='/about'>
						<button className="button is-outlined mr-5">About</button>
						</Link>
						<Link to='/project'>
						<button className="button is-outlined ">Portfolio</button>
						</Link>
						
						
					</div>
				</div>
			</section>
		</>
	);
}

export default Hero;
