
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// function Nav( props ) {

    

// 	return (
    
//     <div className="header-wrapper" id="home">
//       {/* Begin Hero */}
//       <section className="hero is-large">
//       {  /*  Begin Mobile Nav  */}
//         <nav className="navbar is-transparent is-hidden-desktop">
//          { /*  Begin Burger Menu  */}
//           <div className="navbar-brand">
//             <div className="navbar-burger burger" data-target="mobile-nav">
//               <span></span>
//               <span></span>
//               <span></span>
//             </div>
//           </div>
//           {/* End Burger Menu  */}
//           <div id="mobile-nav" className="navbar-menu">
//             <div className="navbar-end">
//               <div className="navbar-item">
//                 <Link className="navbar-item" to="/">
//                   Home
//                 </Link>
//               </div>
//               <div className="navbar-item">
//                 <Link className="navbar-item" to="/about">
//                   About Me
//                 </Link>
//               </div>
//               <div className="navbar-item">
//                 <Link className="navbar-item" to="#services">
//                   Services
//                 </Link>
//               </div>
//               <div className="navbar-item">
//                 <Link className="navbar-item" to="#skills">
//                   Skills
//                 </Link>
//               </div>
//               <div className="navbar-item">
//                 <Link className="navbar-item" to="/project">
//                   Portfolio
//                 </Link>
//               </div>
//               <div className="navbar-item">
//                 <Link className="navbar-item" to="/contact">
//                   Contact
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </nav>
//       {/*  End Mobile Nav */}
     
//         {/*  Begin Hero Menu  */}
//         <div className="hero-foot ">
//           <div className="hero-foot--wrapper">
//             <div className="columns">
//               <div className="column is-12 hero-menu-desktop has-text-centered">
//                 <ul>
//                   <li className="my-class is-active" onClick={(e) =>this.toggleClass(e)}>
//                     <Link to="/">Home</Link>
//                   </li>
//                   <li className="my-class " onClick={(e) =>this.toggleClass(e)}>
//                     <Link to="/about">About </Link>
//                   </li>
//                   <li>
//                     <Link to="/skills">Skills</Link>
//                   </li>
//                   <li>
//                     <Link to="/projects">Projects</Link>
//                   </li>
//                   <li>
//                     <Link to="/contact">Contact</Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//        { /* End Hero Menu  */}
//       </section>
//      {/*  End Hero  */}
//     </div>
  
//     );
// }

// export default Nav;

export default function Nav() {
  const [isActive, setisActive] = React.useState(false)

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a href='/' className='navbar-item'>
          <img
            src='https://bulma.io/images/bulma-logo.png'
            alt='Logo'
            width='112'
            height='28'
          />
        </a>

        <a
          onClick={() => {
            setisActive(!isActive)
          }}
          role='button'
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div id='navbarBasicExample' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <Link to='/' className='navbar-item'>
              Home
            </Link>
            <Link to='/about' className='navbar-item'>
              About
            </Link>
            <Link to='/project' className='navbar-item'>
              Projects
            </Link>
            <Link to='/skills' className='navbar-item'>
              Skills
            </Link>
            <Link to='/resume' className='navbar-item'>
              Resume
            </Link>
            <Link to='/contact' className='navbar-item'>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
