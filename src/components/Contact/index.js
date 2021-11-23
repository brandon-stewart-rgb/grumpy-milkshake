import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
// import { validateEmail } from '../../utils/helpers';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
	const [state, handleSubmit] = useForm('xgedwebd');
	if (state.succeeded) {
		return (
			<section className="contact">
				<Header />

				<div className="section-light contact py-4 px-6 " id="contact">
					<div className="container">
						<div
							className="columns is-multiline"
							data-aos="fade-in-up"
							data-aos-easing="linear"
						>
							<div className="column is-12 about-me">
								<h1 className="title has-text-centered section-title">
									Thanks for reaching out!!
								</h1>
								<h1 className="sub-title has-text-centered ">
									I'll be in touch soon...
								</h1>
							</div>
							<div className="column is-8 is-offset-2">
							
							</div>
						</div>
					</div> 
					
				</div>
				<Footer />
			</section>
		);
	}

	document.title = 'Contact';

	return (
		<section className="contact">
			<Header />

			<div className="section-light contact py-4 px-6 " id="contact">
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
							<form onSubmit={handleSubmit}>
								<div className="field">
									<label className="label">Name</label>
									<div className="control has-icons-left">
										<input
											className="input"
											type="text"
											name="name"
											placeholder="e.g. Jane Doe"
											// defaultValue={name}
											// onBlur={handleChange}
										/>

										<ValidationError
											prefix="Name"
											field="name"
											errors={state.errors}
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
											name="Email"
											placeholder="e.g. jane@janedoe.com"
										/>

										<ValidationError
											prefix="Email"
											field="email"
											errors={state.errors}
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
											name="A message"
											// defaultValue={message}
											// onBlur={handleChange}
										></textarea>

										<ValidationError
											prefix="Message"
											field="message"
											errors={state.errors}
										/>
									</div>
								</div>
								<div className="field">
									{/* <h1 className="subtitle has-text-danger">{errorMessage}</h1> */}
									<div className="control ">
										<button
											className="button submit-button"
											type="submit"
											disabled={state.submitting}
										>
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
		</section>
	);
}

export default Contact;
