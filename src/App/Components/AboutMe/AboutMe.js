import React from 'react';
import './AboutMeStyle.css';
import authorPhoto from '../../Assets/Images/About/author.jpg'
import signature from '../../Assets/Images/About/signature.png';

class AboutMe extends React.Component {
    render() {
        return (
            <div className="about__me playfair">
                <div className="about__me-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <p>Deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.</p>
                </div>
                <div className="about__me-author">
                    <img src={authorPhoto} alt="" className="about__me-photo" />
                    <div className="about__me-name-wrapper">
                        <img src={signature} alt="" className="about__me-sign" />
                        <div className="about__me-name">Cristopher Smith</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;