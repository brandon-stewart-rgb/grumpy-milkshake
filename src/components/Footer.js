import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import './Footer.css';


function Footer() {
	return (
		
		<div className="footer pt-6 pb-6">
			<div class="content has-text-centered pt-2">
			
							<div className="is-divider"></div>
							<div className="columns about-links">
								<div className="column">
									<p className="heading is-size-5">
										<strong>Give me a ring</strong>
									</p>
									<p className="subheading is-size-5">123-456-7890</p>
								</div>
								<div className="column">
								<p className="heading is-size-5">
										<strong>Email Me</strong>
									</p>
									<p className="subheading is-size-5"><a href='mailto:brandon-stewart@pixeltree.us'>brandon-stewart@pixeltree.us</a></p>
								</div>
								<div className="column">
								<p className="heading is-size-5">
										<strong>Download my resume</strong>
									</p>
									<p className="subheading is-size-5">	<Link  target='_blank' to='/files/Brandon_Stewart_2021.pdf'>Download</Link></p>
									
								</div>
							</div>

							<div className="column">
								<a href="https://github.com/brandon-stewart-rgb" target='_blank' rel="noreferrer" >
								<FontAwesomeIcon icon={faGithub } className='font-awesome'></FontAwesomeIcon>
								</a>

								<a href="https://www.linkedin.com/in/brandon-stewart-976a0170/" target='_blank'  rel="noreferrer" >
								<FontAwesomeIcon icon={faLinkedin } className='font-awesome'></FontAwesomeIcon>
								</a>

								<a href="https://www.instagram.com/" target='_blank' rel="noreferrer" >
								<FontAwesomeIcon icon={faInstagram} className='font-awesome'></FontAwesomeIcon>				
								</a>

								<p className='is-size-6 mt-5'>&copy; Copyright 2021 All Content, Brandon Stewart | All rights reserved</p>
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
