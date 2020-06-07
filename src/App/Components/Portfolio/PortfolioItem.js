import React from 'react';

class PortfolioItem extends React.Component {
    render() {
        return (
            <div className="portfolio__item"
             id={this.props.id} 
             onClick={this.props.handleClick}>
                <img src={this.props.img} alt="" className="portfolio__item-img" />
            </div>
        );
    }
}

export default PortfolioItem;