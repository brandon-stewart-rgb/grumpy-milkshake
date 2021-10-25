import React from 'react';

function Nav() {

    const handleClick = () => {
        console.log("click handled")
      }
      
	return (
    <header>
       <nav className="navbar is-dark is-fixed-top nav-bg" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="index.html">
        <img src="images/logo.png" alt='logo' width="112" height="28"/>
      </a>
  {/* href of false side steps error of having anchor with no href */}
      <a role="button" href={() => false} className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navigation">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navigation" className="navbar-menu">
      <div className="navbar-end">
        <a href="index.html" className="navbar-item">Home</a>
        <a href="#about" onClick={() => handleClick()} className="navbar-item">About</a>
        {/* <a href="blog.html" className="navbar-item">blog</a> */}
        <a href="portfolio.html" className="navbar-item">portfolio</a>
        <a href="contact.html" className="navbar-item">contact</a>
      </div>
    </div>
  </nav>
    </header>
    );
}

export default Nav;
