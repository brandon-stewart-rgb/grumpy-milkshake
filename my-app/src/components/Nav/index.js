import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
	const [isActive, setisActive] = React.useState(false);

	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a href="/" className="navbar-item">
					<img
						src="../../images/brandon-stewart.png"
						alt="brandon stewart"
						width="293"
						height="33"
					/>
				</a>

				<a
					onClick={() => {
						setisActive(!isActive);
					}}
					role="button"
					className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>
			<div
				id="navbarBasicExample"
				className={`navbar-menu ${isActive ? 'is-active' : ''}`}
			>
				<div className="navbar-end">
					<div className="navbar-item">
						<Link to="/" className="navbar-item">
							Home
						</Link>
						<Link to="/about" className="navbar-item">
							About
						</Link>
						<Link to="/project" className="navbar-item">
							Portfolio
						</Link>
						<Link to="/skills" className="navbar-item">
							Skills
						</Link>
						<Link to="/resume" className="navbar-item">
							Resume
						</Link>
						<Link to="/contact" className="navbar-item">
							Contact
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
