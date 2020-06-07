import React from 'react';
import './ContactFormStyle.css';

class ContactForm extends React.Component {
    render() {
        return (
            <div className="contact-info">
                <div className="container">
                    <div className="contact-info__inner">
                        {this.props.title !== false ? <div className="section__title">Contact Info</div> : ""}
                        <form action="/" className="contact__form">
                            <div className="contact__form-title playfair">
                                Contact Form
                            </div>
                            <div className="contact__form-inputs-wrapper">
                                <input type="name" className="contact__form-item contact__form-input" placeholder="Full Name" required />
                                <input type="email" className="contact__form-item contact__form-input" placeholder="Email@example.com" required />
                            </div>
                            <textarea name="Form Text" id="contact-info-textarea" className="contact__form-item contact__form-textarea" placeholder="Type Message Here" required></textarea>
                            <button className="contact__form-submit playfair" type="submit">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;