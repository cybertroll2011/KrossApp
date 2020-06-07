import React from 'react';
import './ServicesStyle.css';

class Services extends React.Component{
    constructor(props){
        super(props);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(event){
        let classList = event.target.classList;
        if( classList == "services__item" ){
            event.target.classList = "services__item services__item-active";
        }   else if( classList == "services__item services__item-active" ){
            event.target.classList = "services__item";
        }
    }
    handleMouseLeave(event){
        let classList = event.target.classList;
        if( classList == "services__item" ){
            event.target.classList = "services__item services__item-active";
        }   else if( classList == "services__item services__item-active" ){
            event.target.classList = "services__item";
        }
    }
    render(){
        return(
            <div className="services">
                <div className="section__title">Services</div>
                <div className="services__items">
                    <div className="services__item"
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}>
                        <div className="services__item-figures-wrapper">
                            <div className="triangle"></div>
                            <div className="circle"></div>
                        </div>
                        <div className="services__item-title playfair">
                            UI Design
                        </div>
                        <div className="services__item-text roboto">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                    <div className="services__item services__item-active"
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}>
                        <div className="services__item-figures-wrapper">
                            <div className="triangle triangle-rotated"></div>
                            <div className="square square-moved"></div>
                        </div>
                        <div className="services__item-title playfair">
                            UX Design
                        </div>
                        <div className="services__item-text roboto">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                    <div className="services__item"
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}>
                        <div className="services__item-figures-wrapper">
                            <div className="square"></div>
                            <div className="circle"></div>
                        </div>
                        <div className="services__item-title playfair">
                            Interaction Design
                        </div>
                        <div className="services__item-text roboto">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;