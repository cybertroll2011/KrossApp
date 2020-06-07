import React from 'react';
import './ContactStyle.css';

import ContactForm from '../../Components/ContactForm/ContactForm';
import Footer from '../../Components/Footer/Footer';

class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <div className="contact__intro-background"></div>
                <div className="container">
                    <div className="contact__inner">
                        <div className="intro contact__intro">
                            <div className="intro__title">Contact Info</div>
                        </div>
                    </div>
                </div>
                <ContactForm title={false} />
                <Footer />
            </div>
        );
    }
}

export default Contact;