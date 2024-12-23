import React, { useState } from "react";

function ContactUsPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="contact-us-container">
      <button className="open-modal-btn" onClick={toggleModal}>
        Contact Us
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-modal-btn" onClick={toggleModal}>
              &times;
            </button>
            <h2>Contact Us</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactUsPopup;
