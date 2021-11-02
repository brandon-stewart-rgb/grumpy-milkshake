import React from "react";
import Footer from '../Footer';

function Contact() {
    return (
       <>
  	<section class="hero is-primary">
			<div class="hero-body">
				<p class="subtitle">Contact</p>
			</div>
		</section>
        <div className="section-light contact" id="contact">
          <div className="container">
            <div
              className="columns is-multiline"
              data-aos="fade-in-up"
              data-aos-easing="linear"
            >
              <div className="column is-12 about-me">
                <h1 className="title has-text-centered section-title">
                  Get in touch
                </h1>
              </div>
              <div className="column is-8 is-offset-2">
                <form
                  action="https://formspree.io/email@example.com"
                  method="POST"
                >
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="text"
                        placeholder="Ex. Jane Smith"
                        name="Name"
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="email"
                        placeholder="Ex. hello@arctheme.com"
                        name="Email"
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        placeholder="Textarea"
                        name="Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control ">
                      <button className="button submit-button">
                        Submit&nbsp;&nbsp;
                        <i className="fas fa-paper-plane"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
       <Footer />
  </>
    )
}

export default Contact;