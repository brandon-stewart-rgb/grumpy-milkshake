import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Avatar from '../../assets/images/avatar.png';

function About() {

	document.title = 'About';

	return (
		<section className="about-me">
			
			<Header />

			<div className="section-light " id="about-me">
				<div className="container">
					<div className="column is-12 about-me">
						<h1 className="title has-text-centered section-title">About Me</h1>
					</div>
					<div className="columns is-multiline">
						<div
							className="column is-6 has-vertically-aligned-content"
							data-aos="fade-right"
						>
							<p className="is-larger">
								&emsp;&emsp;
								<strong>
									I come from a graphic design background choosing to enter into
									the online realm while focusing on designing WordPress sites
									and I then began diving deeper into the functionality of
									websites.
								</strong>
							</p>
							<br />
							<p>
								This interest lead me to working on the backend to work towards
								becoming a full-stack developer. Currently I am working on React
								in the MERN stack.
							</p>
							<br />
							<div className="is-divider"></div>
							<div className="columns about-links">
								<div className="column">
									<p className="heading">
										<strong>Give me a ring</strong>
									</p>
									<p className="subheading">123-456-7890</p>
								</div>
								<div className="column">
									<p className="heading">
										<strong>Email Me</strong>
									</p>
									<p className="subheading">
										<Link>hello@example.com</Link>
									</p>
								</div>
								<div className="column">
									<p className="heading">
										<strong>View my portfolio</strong>
									</p>
									<p className="subheading ">
										{' '}
										<Link target="_blank" to="/files/Brandon_Stewart_2021.pdf">
											Download
										</Link>
									</p>
								</div>
							</div>
						</div>
						<div className="column is-6 right-image " data-aos="fade-left">
							<img className="is-rounded" src={Avatar} alt="Brandon Stewart" />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</section>
	);
}

export default About;
