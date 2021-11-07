import React from 'react';
import Footer from '../Footer';

function About() {
	return (
		<section className="about-me">
			<section class="hero is-primary">
				<div class="hero-body">
					<p class="subtitle">About</p>
				</div>
			</section>

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
									the online realm focusing on designing WordPress sites and
									began diving deeper into the functionality. This interest lead
									me to working on the backend to work towards becoming a
									full-stack developer.
								</strong>
							</p>
							<br />
							<p>
								Currently I am working on React.

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
									<p className="subheading">hello@example.com</p>
								</div>
								<div className="column">
									<p className="heading">
										<strong>View my portfolio</strong>
									</p>
									<p className="subheading">example.com</p>
								</div>
							</div>
						</div>
						<div className="column is-6 right-image " data-aos="fade-left">
							<img
								className="is-rounded"
								src={require("../../assets/images/avatar.png")}
								alt=""
							/>
						
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</section>
	);
}

export default About;
