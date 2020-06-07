import React from 'react';
import './ExperienceStyle.css';

import ellipse1 from '../../Assets/Images/Experience/ellipse-1.png';
import ellipse2 from '../../Assets/Images/Experience/ellipse-2.png';
import ellipse3 from '../../Assets/Images/Experience/ellipse-3.png';

class Experience extends React.Component{
    render(){
        return(
            <div className="experience">
                <div className="section__title">Experience</div>
                <div className="experience__items">
                    <div className="experience__item">
                        <div className="experience__item-ellipse">
                            <img src={ellipse1} alt="" />
                        </div>
                        <div className="experience__item-term roboto">
                            Jan 2007 - Feb 2009
                        </div>
                        <div className="experience__item-position playfair">
                            Junior UX Designer
                        </div>
                        <div className="experience__item-company playfair">
                            Webex
                        </div>
                    </div>
                    <div className="experience__item">
                        <div className="experience__item-ellipse">
                            <img src={ellipse2} alt="" />
                        </div>
                        <div className="experience__item-term roboto">
                            Jan 2007 - Feb 2009
                        </div>
                        <div className="experience__item-position playfair">
                            Junior UX Designer
                        </div>
                        <div className="experience__item-company playfair">
                            Webex
                        </div>
                    </div>
                    <div className="experience__item">
                        <div className="experience__item-ellipse">
                            <img src={ellipse3} alt="" />
                        </div>
                        <div className="experience__item-term roboto">
                            Jan 2007 - Feb 2009
                        </div>
                        <div className="experience__item-position playfair">
                            Junior UX Designer
                        </div>
                        <div className="experience__item-company playfair">
                            Webex
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;