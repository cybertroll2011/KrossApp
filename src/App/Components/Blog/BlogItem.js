import React from 'react';
import './BlogStyle.css';

class BlogItem extends React.Component {
    render() {
        return (
            <a href="#" className="blog__item" target="blank">
                <div className="blog__item-thumbnail">
                    <img src={this.props.img} alt="" className="blog__item-thumbnail" />
                </div>
                <div className="blog__item-title playfair">{this.props.title}</div>
                <div className="blog__item-text roboto">{this.props.text}</div>
                <span className="blog__item-type playfair">{this.props.type}</span>
            </a>
        );
    }
}

export default BlogItem;