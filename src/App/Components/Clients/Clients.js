import React from 'react';
import './ClientsStyle.css';

// clients logo
import logo1 from '../../Assets/Images/Clients/client-logo-1.png';
import logo2 from '../../Assets/Images/Clients/client-logo-2.png';
import logo3 from '../../Assets/Images/Clients/client-logo-3.png';
import logo4 from '../../Assets/Images/Clients/client-logo-4.png';
import logo5 from '../../Assets/Images/Clients/client-logo-5.png';

class Clients extends React.Component {
    render() {
        return (
            <div className="clients">
                <div className="clients__item">
                    <a href="https://envato.com/" target="blank">
                        <img src={logo1} alt="Our Client" title="Our Client" />
                    </a>
                </div>
                <div className="clients__item">
                    <a href="https://www.sundance.org/" target="blank">
                        <img src={logo2} alt="Our Client" title="Our Client" />
                    </a>
                </div>
                <div className="clients__item">
                    <a href="https://slack.com/" target="blank">
                        <img src={logo3} alt="Our Client" title="Our Client" />
                    </a>
                </div>
                <div className="clients__item">
                    <a href="https://airbnb.com" target="blank">
                        <img src={logo4} alt="Our Client" title="Our Client" />
                    </a>
                </div>
                <div className="clients__item">
                    <a href="https://www.forbes.com/" target="blank">
                        <img src={logo5} alt="Our Client" title="Our Client" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Clients;