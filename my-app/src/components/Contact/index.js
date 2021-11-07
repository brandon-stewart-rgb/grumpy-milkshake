import React, { useState } from 'react';
import Footer from '../Footer';
import { validateEmail } from '../../utils/helpers';

function Contact() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [errorMessage, setErrorMessage] = useState('');
	const { name, email, message } = formState;

	function handleChange(e) {
		if (e.target.name === 'email') {
			const isValid = validateEmail(e.target.value);

			if (!isValid) {
				setErrorMessage('Please enter a valid email');
			} else {
				setErrorMessage('');
			}
		} else {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage('');
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<section className="contact">
			<section class="hero is-primary">
				<div class="hero-body">
					<p class="subtitle">Contact</p>
				</div>
			</section>
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
							<form
							// action="https://formspree.io/email@example.com"
							// method="POST"
							// onSubmit={handleSubmit(onSubmit)}
							>
						
								<div className="field">
									<label className="label">Name</label>
									<div className="control has-icons-left">
										<input
											className="input"
											type="text"
											name="Name"
                      placeholder='e.g. Jane Doe'
											defaultValue={name}
											onBlur={handleChange}
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
                      placeholder='e.g. jane@janedoe.com'
											defaultValue={email}
											onBlur={handleChange}
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
											defaultValue={message}
											onBlur={handleChange}
										></textarea>
									</div>
								</div>
								<div className="field">
									<h1 className="subtitle has-text-danger">{errorMessage}</h1>
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
		</section>
	);
}

export default Contact;
