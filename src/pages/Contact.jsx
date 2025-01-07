import React from 'react';

const Contact = () => (
  <div className="contact">
    <h1>Contact Us</h1>
    <form>
      <label>Name:</label>
      <input type="text" placeholder="Your name" />
      <label>Email:</label>
      <input type="email" placeholder="Your email" />
      <label>Message:</label>
      <textarea placeholder="Your message"></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
);

export default Contact;
