import React from 'react';
import './HomeStyle.css';

// components
import Skills from '../../Components/Skills/Skills';
import Experience from '../../Components/Experience/Experience';
import Education from '../../Components/Education/Education';
import Services from '../../Components/Services/Services';
import Portfolio from '../../Components/Portfolio/Portfolio';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Clients from '../../Components/Clients/Clients';
import Blogs from '../../Components/Blog/Blogs';
import ContactForm from '../../Components/ContactForm/ContactForm';
import Footer from '../../Components/Footer/Footer';

// portfolio images
import bottlesImg from '../../Assets/Images/Portfolio/bottles.jpg';
import gameboyImg from '../../Assets/Images/Portfolio/gameboy.jpg';
import clocksImg from '../../Assets/Images/Portfolio/clocks.jpg';
import gamepadImg from '../../Assets/Images/Portfolio/gamepad.jpg';
import skateImg from '../../Assets/Images/Portfolio/skateboard.jpg';
import filmImg from '../../Assets/Images/Portfolio/film.jpg';

// blog thumbnails
import blogImg1 from '../../Assets/Images/Blogs/blog-thumbnail-1.jpg';
import blogImg2 from '../../Assets/Images/Blogs/blog-thumbnail-2.jpg';
import blogImg3 from '../../Assets/Images/Blogs/blog-thumbnail-3.jpg';

class Home extends React.Component {
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
        const blogArray = [
            {
                id: 1,
                title: "Amazon increase income 1.5 Million",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                thumbnail: blogImg1,
                type: "E-Commerce"
            },
            {
                id: 2,
                title: "My increase income 40 griven",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                thumbnail: blogImg2,
                type: "E-Commerce"
            },
            {
                id: 3,
                title: "Amazon increase income 1.5 Million",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                thumbnail: blogImg3,
                type: "Creative"
            }
        ]
        return (
            <div className="home">
                <div className="home__intro-background"></div>
                <div className="container">
                    <div className="home__inner">
                        <div className="intro home__intro">
                            <h1 className="intro__title">
                                Hi! I'm <br />
                                Christopher <br />
                                UX designer
                            </h1>
                        </div>
                        <div className="home__know-more playfair">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <a href="../About/About.js">Know More</a>
                        </div>
                        <Skills />
                        <Experience />
                        <Education />
                        <Services />
                        <Portfolio
                            portfolioArray={portfolioArray}
                            filterBar={false}
                            marginTop="big" />
                    </div>
                </div>
                <Testimonials />
                <div className="container">
                    <div className="home__inner">
                        <Clients />
                        <Blogs
                            blogArray={blogArray}
                            title={true}
                            marginTop="big" />
                    </div>
                </div>
                <ContactForm />
                <Footer />
            </div>
        );
    }
}

export default Home;