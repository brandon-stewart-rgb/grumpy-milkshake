import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub,faInstagram } from "@fortawesome/free-brands-svg-icons";
import '../assets/css/index.css';



function Footer() {
	return (
		
		<div className="footer pt-6 pb-6">
			<div class="content has-text-centered pt-2">
			
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
										<strong>Download my resume</strong>
									</p>
									<p className="subheading">example.com</p>
								</div>
							</div>

							<div className="column">
								<a href="https://github.com/brandon-stewart-rgb" target='_blank' >
								<FontAwesomeIcon icon={faGithub } className='font-awesome'></FontAwesomeIcon>
								</a>

								<a href="https://www.linkedin.com/in/brandon-stewart-976a0170/" target='_blank' >
								<FontAwesomeIcon icon={faLinkedin } className='font-awesome'></FontAwesomeIcon>
								</a>

								<a href="https://www.instagram.com/" target='_blank' >
								<FontAwesomeIcon icon={faInstagram} className='font-awesome'></FontAwesomeIcon>				
								</a>
							</div>

				{/* <Link to="/">
					<button className="button is-outlined mb-4 brandon ">
						<img
							src="../../images/brandon-stewart.png"
							alt="brandon stewart"
							width="293"
							height="33"
						/>
					</button>
				</Link> */}
				
			</div>
		</div>
	);
}

export default Footer;
