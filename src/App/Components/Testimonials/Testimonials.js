import React from 'react';
import './TestimonialsStyle.css';
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';

// images
import quote from '../../Assets/Images/Testimonials/quote.png';
import Whitesnake from '../../Assets/Images/Testimonials/testim-author-1.jpg';
import ErmesCostello from '../../Assets/Images/Testimonials/testim-author-2.jpg';
import JolyneCujoh from '../../Assets/Images/Testimonials/testim-author-3.jpg';

class Testimonials extends React.Component {
    render() {
        return (
            <div className="testimonials">
                <div className="container">
                    <div className="testimonials__inner">
                        <div className="section__title">Testimonials</div>
                        <Carousel 
                            className="testimonials__carousel"
                            swipeable={true} 
                            showIndicators={false}
                            showThumbs={false}
                            showStatus={false}>
                            <div className="testimonial__item playfair">
                                <div className="testimonial__item-quote">
                                    <img src={quote} alt="" />
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </div>
                                <div className="testimonial__item-author">
                                    <div className="testimonial__item-photo">
                                        <img src={Whitesnake} alt="" />
                                    </div>
                                    <div className="testimonial__item-name">
                                        Whitesnake
                                    </div>
                                    <div className="testimonial__item-post">
                                        CEO, Funder
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial__item playfair">
                                <div className="testimonial__item-quote">
                                    <img src={quote} alt="" />
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </div>
                                <div className="testimonial__item-author">
                                    <div className="testimonial__item-photo">
                                        <img src={JolyneCujoh} alt="" />
                                    </div>
                                    <div className="testimonial__item-name">
                                        Jolyne Cujoh
                                    </div>
                                    <div className="testimonial__item-post">
                                        PR Manager
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial__item playfair">
                                <div className="testimonial__item-quote">
                                    <img src={quote} alt="" />
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </div>
                                <div className="testimonial__item-author">
                                    <div className="testimonial__item-photo">
                                        <img src={ErmesCostello} alt="" />
                                    </div>
                                    <div className="testimonial__item-name">
                                        Ermes Costello
                                    </div>
                                    <div className="testimonial__item-post">
                                        HR Manager
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonials;