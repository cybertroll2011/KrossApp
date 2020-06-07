import React from 'react';
import './EducationStyle.css';
import hatIcon from '../../Assets/Images/Education/graduation-hat.png';

class Education extends React.Component{
    render(){
        return(
            <div className="education">
                <div className="section__title">Education</div>
                <div className="education__items">
                    <div className="education__item">
                        <div className="education__item-left">
                            <img src={hatIcon} alt="hat" />
                        </div>
                        <div className="education__item-right">
                            <div className="education__item-year roboto">2006</div>
                            <div className="education__item-speciality playfair">
                                Masters in UX Design
                            </div>
                            <div className="education__item-university playfair">
                                Masassusets Institute of Technology
                            </div>
                        </div>
                    </div>
                    <div className="education__item">
                        <div className="education__item-left">
                            <img src={hatIcon} alt="hat" />
                        </div>
                        <div className="education__item-right">
                            <div className="education__item-year roboto">2004</div>
                            <div className="education__item-speciality playfair">
                                Honours in Fine Arts
                            </div>
                            <div className="education__item-university playfair">
                                Harvard University
                            </div>
                        </div>
                    </div>
                    <div className="education__item">
                        <div className="education__item-left">
                            <img src={hatIcon} alt="hat" />
                        </div>
                        <div className="education__item-right">
                            <div className="education__item-year roboto">2000</div>
                            <div className="education__item-speciality playfair">
                                Higher Secondary Certificate
                            </div>
                            <div className="education__item-university playfair">
                                Cardiff School
                            </div>
                        </div>
                    </div>
                    <div className="education__item">
                        <div className="education__item-left">
                            <img src={hatIcon} alt="hat" />
                        </div>
                        <div className="education__item-right">
                            <div className="education__item-year roboto">1998</div>
                            <div className="education__item-speciality playfair">
                                Secondary School Certificate
                            </div>
                            <div className="education__item-university playfair">
                                Cardiff School
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;