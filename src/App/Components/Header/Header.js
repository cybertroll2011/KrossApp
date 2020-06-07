import React from 'react';
import './HeaderStyle.css';
import logo from '../../Assets/Images/Header/kross-logo.png';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';

import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import Blog from '../../Pages/Blog/Blog';
import Contact from '../../Pages/Contact/Contact';
import PortfolioPage from '../../Pages/Portfolio/PortfolioPage';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.moveToTop = this.moveToTop.bind(this);
    }
    moveToTop() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <Router>
                <div className="header">
                    <div className="container">
                        <div className="header__inner">
                            <div className="header__logo" onClick={this.moveToTop}>
                                <img src={logo} alt="Logo" />
                            </div>
                            <Navigation />
                        </div>
                    </div>
                </div>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/blog">
                        <Blog />
                    </Route>
                    <Route exact path="/portfolio">
                        <PortfolioPage />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default Header;