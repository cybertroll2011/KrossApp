import React from 'react';
import './WorkProcessStyle.css';

import wpIcon1 from '../../Assets/Images/WorkProcess/work-icon-1.png';
import wpIcon2 from '../../Assets/Images/WorkProcess/work-icon-2.png';
import wpIcon3 from '../../Assets/Images/WorkProcess/work-icon-3.png';

class WorkProcess extends React.Component {
    render() {
        return (
            <div className="work-process">
                <div className="section__title">Work Process</div>
                <div className="work-process__items">
                    <div className="work-process__item">
                        <div className="work-process__item-icon">
                            <img src={wpIcon1} alt="" />
                        </div>
                        <div className="work-process__item-title playfair">
                            Research and Plan
                        </div>
                        <div className="work-process__item-text roboto">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                    <div className="work-process__item">
                        <div className="work-process__item-icon">
                            <img src={wpIcon2} alt="" />
                        </div>
                        <div className="work-process__item-title playfair">
                            Design and Develop
                        </div>
                        <div className="work-process__item-text roboto">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                    <div className="work-process__item">
                        <div className="work-process__item-icon">
                            <img src={wpIcon3} alt="" />
                        </div>
                        <div className="work-process__item-title playfair">
                            Deliver
                        </div>
                        <div className="work-process__item-text roboto">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkProcess;