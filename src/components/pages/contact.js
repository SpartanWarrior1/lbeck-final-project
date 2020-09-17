import React from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_qjo54yi', e.target, 'user_vK4PNY2T9yceQ48aAXnvV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }

    return(
        <div className="contact-wrapper">
            <div className="contact-info-wrapper">
                <div className="contact-header">
                    Contact Me
                </div>
                <div className="contact-info">
                    <div className="info-phone">
                        <FontAwesomeIcon icon="phone" />
                        <div>555-555-5555</div>
                    </div>
                    <div className="info-email">
                        <FontAwesomeIcon icon="envelope" />
                        <div>lbecktester@gmail.com</div>
                    </div>
                </div>
            </div>

            <div className="contact-form-wrapper">
                <form className="contact-form" onSubmit={sendEmail}>
                    <div className="contact-form-info">
                        <label className="contact-label">Name</label>
                        <input type="text" className="contact-input" name="name" />
                    </div>
                    <div className="contact-form-info">
                        <label className="contact-label">Email address</label>
                        <input type="email" className="contact-input" name="email" />
                    </div>
                    <div className="contact-form-info">
                        <label className="contact-label">Message</label>
                        <textarea className="contact-message" rows="5" name="message" />
                    </div>
                    <button type="submit" className="contact-btn">Submit</button>
                </form>
            </div>
        </div>
    )
}