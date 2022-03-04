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
						<h1 className="title has-text-centered section-title mb-5">About Me</h1>
					</div>
					<div className="columns is-multiline">
						<div
							className="column is-6 has-vertically-aligned-content"
							data-aos="fade-right"
						>
							<p className="is-larger">
								&emsp;&emsp;
								Front-end web developer with a BA in Graphic Design from Utah State University. Recently earned a certificate in Full Stack Web Development from the University of Utah, with newly developed skills and experience in JavaScript, Node, and React.js. Previous experience includes designing/developing WordPress sites in PHP, HTML, and CSS for several organizations, which increased exposure and revenue. Proven ability to meet deadlines, project management, and teamwork. Strong interpersonal skills leading and synergizing success teams and projects. Passionate about approaching programming challenges from different angles and collaborating with others to create meaningful web applications. Holds years of valuable experience in diverse yet symbiotic skills, such as cutting-edge web technologies, SEO, and graphic design, which would be a strong asset for any engineering team. 
							</p>
							<br />
							<div className="is-divider"></div>
							<div className="columns about-links">
								<div className="column">
									<p className="heading">
										<strong>Give me a ring</strong>
									</p>
									<p className="subheading"><span></span>&#56;<span></span>&#48;<span></span>&#49;<span></span>.<span>7<span></span>&#48;<span></span>7</span><span>.&#55;<span></span>&#50;</span>&#55;<span></span>&#50;<span></span></p>
								</div>
								<div className="column">
									<p className="heading">
										<strong>Email Me</strong>
									</p>
									<p className="subheading">
									<a href='mailto:brandon-stewart@pixeltree.us'>Click Here</a>
									</p>
								</div>
								<div className="column">
									<p className="heading">
										<strong>View my portfolio</strong>
									</p>
									<p className="subheading ">
										{' '}
										<Link target="_blank" to="/files/Brandon_Stewart_2022.pdf">
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
