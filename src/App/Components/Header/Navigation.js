import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavActive : false
        }
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.handleNavClick = this.handleNavClick.bind(this);
    }

    handleToggleClick(event){
        let target = event.target;
        if( !this.state.isNavActive ){
            this.setState({
                isNavActive : true
            }, () => {
                target.classList = ["nav__toggle nav__toggle-active"];
                document.querySelector(".nav").classList = ["nav nav-active"];
            });
        }   else{
            this.setState({
                isNavActive : false
            }, () => {
                target.classList = ["nav__toggle"];
                document.querySelector(".nav").classList = ["nav"];
            });
        }
    }

    handleNavClick(){
        if( this.state.isNavActive ){
            this.setState({
                isNavActive : false
            }, () => {
                document.querySelector(".nav__toggle").classList = ["nav__toggle"];
                document.querySelector(".nav").classList = ["nav"];
            });
        }
    }

    render() {
        return (
            <nav className="nav">
                <NavLink to="/" className="nav__link" onClick={this.handleNavClick}>
                    Home
                </NavLink>
                <NavLink to="/about" className="nav__link" onClick={this.handleNavClick}>
                    About
                </NavLink>
                <NavLink to="/blog" className="nav__link" onClick={this.handleNavClick}>
                    Blog
                </NavLink>
                <NavLink to="/portfolio" className="nav__link" onClick={this.handleNavClick}>
                    Portfolio
                </NavLink>
                <NavLink to="/contact" className="nav__link" onClick={this.handleNavClick}>
                    Contact
                </NavLink>
                <button className="nav__toggle" 
                  onClick={this.handleToggleClick}>
                    <div className="nav__toggle-line line1"></div>
                    <div className="nav__toggle-line line2"></div>
                    <div className="nav__toggle-line line3"></div>
                </button>
            </nav>
        );
    }
}

export default Navigation;