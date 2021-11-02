import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className="footer">
			<div class="content has-text-centered">
				<Link to="/">
					<button className="button is-outlined ">
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
