import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Project from '../Project';

function Portfolio() {
  
	document.title = 'Portfolio';

	return (
		<section className="project">

			<Header />

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

						<Project />

					</div>
				</div>
			</div>
			<Footer />
		</section>
	);
}

export default Portfolio;
