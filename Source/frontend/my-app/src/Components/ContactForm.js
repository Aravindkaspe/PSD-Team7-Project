import React, { useState } from "react";
import axios from "axios";
import "../Styles/ContactForm.css";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phoneNumber: "",
		description: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"http://localhost:5555/contact/createcontact",
				formData,
				{
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					transformRequest: [
						(data) => {
							const formParams = new URLSearchParams();
							for (const [key, value] of Object.entries(data)) {
								formParams.append(key, value);
							}
							return formParams.toString();
						},
					],
				}
			);
			console.log("Form submitted successfully:", response.data);
			// Optionally, you can reset the form or show a success message
		} catch (error) {
			console.error("There was an error submitting the form:", error);
			// Optionally, you can show an error message to the user
		}
	};

	return (
		<div className="modal-content">
			<h2>Contact Us</h2>
			<p>
				Please allow up to 48 hours for a response. All 3D printing requests
				will need a minimum of 2 weeks due to high demands in our schedules.
			</p>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name*</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="John Smith"
						required
						value={formData.name}
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email address*</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="name@domain.com"
						required
						value={formData.email}
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="phone">Phone number</label>
					<input
						type="tel"
						id="phone"
						name="phoneNumber"
						placeholder="country code + number"
						value={formData.phoneNumber}
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<textarea
						id="description"
						name="description"
						rows="4"
						placeholder="Tell us about your Query"
						required
						value={formData.description}
						onChange={handleChange}
					></textarea>
				</div>
				<button type="submit" className="submit-button">
					Send
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
