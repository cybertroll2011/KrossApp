import React from 'react';
import './SkillsStyle.css';

class Skills extends React.Component{
    render(){
        return(
            <div className="skills">
                <h1 className="section__title">Skills</h1>
                <div className="skill__items playfair">
                    <div className="skill__item">
                        <div className="skill__item-waves yellow"></div>
                        <div className="skill__item-percent">90%</div>
                        <div className="skill__item-name">Web Design</div>
                    </div>
                    <div className="skill__item">
                        <div className="skill__item-waves pink"></div>
                        <div className="skill__item-percent">60%</div>
                        <div className="skill__item-name">Logo Design</div>
                    </div>
                    <div className="skill__item">
                        <div className="skill__item-waves blue"></div>
                        <div className="skill__item-percent">75%</div>
                        <div className="skill__item-name">After Effects</div>
                    </div>
                    <div className="skill__item">
                        <div className="skill__item-waves pink"></div>
                        <div className="skill__item-percent">60%</div>
                        <div className="skill__item-name">Web Application</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;