import React from 'react';
import './AboutStyle.css';

import AboutMe from '../../Components/AboutMe/AboutMe';
import WorkProcess from '../../Components/WorkProcess/WorkProcess';
import MyTeam from '../../Components/MyTeam/MyTeam';
import Clients from '../../Components/Clients/Clients';
import ContactForm from '../../Components/ContactForm/ContactForm';
import Footer from '../../Components/Footer/Footer';

class About extends React.Component {
    render() {
        return (
            <div className="about">
                <div className="about__intro-background"></div>
                <div className="container">
                    <div className="about__inner">
                        <div className="intro about__intro">
                            <h1 className="intro__title">
                                About Me
                            </h1>
                        </div>
                        <AboutMe />
                        <WorkProcess />
                    </div>
                </div>
                <MyTeam />
                <div className="container">
                    <Clients />
                </div>
                <ContactForm />
                <Footer />
            </div>
        );
    }
}

export default About;