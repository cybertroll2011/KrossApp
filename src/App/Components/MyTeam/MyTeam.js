import React from 'react';
import './MyTeam.css';

import member1 from '../../Assets/Images/MyTeam/team-member-1.jpg';
import member2 from '../../Assets/Images/MyTeam/team-member-2.jpg';
import member3 from '../../Assets/Images/MyTeam/team-member-3.jpg';

class MyTeam extends React.Component {
    render() {
        return (
            <div className="my-team">
                <div className="container">
                    <div className="my-team__inner">
                        <div className="section__title">My Team</div>
                        <div className="team__members playfair">
                            <div className="team__member">
                                <div className="team__member-photo">
                                    <img src={member1} alt="" />
                                </div>
                                <div className="team__member-name">
                                    Jack Schenziwe
                                </div>
                                <div className="team__member-post">
                                    Project Manager
                                </div>
                            </div>
                            <div className="team__member">
                                <div className="team__member-photo">
                                    <img src={member2} alt="" />
                                </div>
                                <div className="team__member-name">
                                    Marta Starba
                                </div>
                                <div className="team__member-post">
                                    UX Designer
                                </div>
                            </div>
                            <div className="team__member">
                                <div className="team__member-photo">
                                    <img src={member3} alt="" />
                                </div>
                                <div className="team__member-name">
                                    Tendi Scott
                                </div>
                                <div className="team__member-post">
                                    Front-End Developer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyTeam;