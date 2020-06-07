import React from 'react';
import './FooterStyle.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="footer__inner">
                        <div className="footer__inner-info playfair">
                            <div className="footer__inner-info-item">
                                <div className="footer__inner-info-item-title">
                                    Email
                                </div>
                                <a href="mailto: strangefrogg@gmail.com" className="footer__inner-info-item-link">
                                    strangefrogg@gmail.com
                                </a>
                            </div>
                            <div className="footer__inner-info-item">
                                <div className="footer__inner-info-item-title">
                                    Telegram
                                </div>
                                <a href="https://teleg.run/dmitriyr54" className="footer__inner-info-item-link" target="blank">
                                    @dmitriyr54
                                </a>
                            </div>
                            <div className="footer__inner-info-item">
                                <div className="footer__inner-info-item-title">
                                    Address
                                </div>
                                <a href="https://www.google.com.ua/maps/place/%D0%A0%D0%B5%D0%B7%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D1%8F+%D0%9C%D0%B5%D0%B6%D0%B8%D0%B3%D0%BE%D1%80%D1%8C%D0%B5/@50.6139353,30.4769761,16.48z/data=!4m5!3m4!1s0x472b2b47767aed9b:0xf56c812339d2dea4!8m2!3d50.6147877!4d30.4738684?" className="footer__inner-info-item-link" target="blank">
                                    Mezhyhirya Residence, Kiev region
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">
                    @Kross App, 2020. By <a href="https://github.com/cybertroll2011?tab=projects" target="blank">Dimon</a>
                </div>
            </footer>
        );
    }
}

export default Footer;