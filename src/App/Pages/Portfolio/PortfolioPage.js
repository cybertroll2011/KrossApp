import React from 'react';
import './PortfolioPageStyle.css';
import Portfolio from '../../Components/Portfolio/Portfolio';
import Clients from '../../Components/Clients/Clients';
import ContactForm from '../../Components/ContactForm/ContactForm';
import Footer from '../../Components/Footer/Footer';

// portfolio images
import bottlesImg from '../../Assets/Images/Portfolio/bottles.jpg';
import gameboyImg from '../../Assets/Images/Portfolio/gameboy.jpg';
import clocksImg from '../../Assets/Images/Portfolio/clocks.jpg';
import gamepadImg from '../../Assets/Images/Portfolio/gamepad.jpg';
import skateImg from '../../Assets/Images/Portfolio/skateboard.jpg';
import filmImg from '../../Assets/Images/Portfolio/film.jpg';

class PortfolioPage extends React.Component {
    render() {
        const portfolioArray = [
            {
                id: 1,
                title: "Bottles Photo",
                author: "Deniska Petrov",
                img: bottlesImg,
                type: "illustration"
            },
            {
                id: 2,
                title: "Gameboy Photo",
                author: "Deniska Petrov",
                img: gameboyImg,
                type: "ui/ux design"
            },
            {
                id: 3,
                title: "Grandma's Clocks",
                author: "Ivan Govnov",
                img: clocksImg,
                type: "branding"
            },
            {
                id: 4,
                title: "My Gamepad",
                author: "Leshenka Pryadko",
                img: gamepadImg,
                type: "ui/ux design"
            },
            {
                id: 5,
                title: "Skateboard",
                author: "Strem Obzor",
                img: skateImg,
                type: "illustration"
            },
            {
                id: 6,
                title: "Celluloid",
                author: "Nolan Geniy",
                img: filmImg,
                type: "illustration"
            }
        ];
        return (
            <div className="portfolio-page">
                <div className="portfolio-page__intro-background"></div>
                <div className="container">
                    <div className="portfolio-page__inner">
                        <div className="intro portfolio-page__intro">
                            <div className="intro__title">Portfolio</div>
                        </div>
                        <Portfolio portfolioArray={portfolioArray} title={false} />
                        <Clients />
                    </div>
                </div>
                <ContactForm />
                <Footer />
            </div>
        );
    }
}

export default PortfolioPage;