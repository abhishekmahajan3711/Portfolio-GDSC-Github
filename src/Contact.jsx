import React from "react";
import "./css_modules/ContactPageStyles.css";

export default function Contact() {
  return (
    <div>
      <div
        data-aos="flip-right"
        data-aos-duration="2000"
        id="contact"
        className="contact-left-container"
      >
        <div className="project-horizontal-line"></div>
        <form
          className="contact-form"
          method="post"
          action="https://formspree.io/f/mgebrodw"
        >
          <label htmlFor="first-name">First Name:</label>
          <input type="text" id="first-name" name="firstName" required />

          <label htmlFor="last-name">Last Name:</label>
          <input type="text" id="last-name" name="lastName" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-info">
        <div className="project-horizontal-line"></div>
        <h2>Get in Touch</h2>
        <p>
          If you have any questions or comments, please don't hesitate to
          contact me using the form on the left or the email address below.
        </p>
        <p>Email: abhishekmahajan3711@gmail.com</p>
      </div>
    </div>
  );
}
