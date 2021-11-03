import React from 'react';
import { Link } from 'react-router-dom';

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
										<strong>View my portfolio</strong>
									</p>
									<p className="subheading">example.com</p>
								</div>
							</div>

				<Link to="/">
					<button className="button is-outlined mb-4  ">
						<img
							src="../../images/brandon-stewart.png"
							alt="brandon stewart"
							width="293"
							height="33"
						/>
					</button>
				</Link>
				
			</div>
		</div>
	);
}

export default Footer;
