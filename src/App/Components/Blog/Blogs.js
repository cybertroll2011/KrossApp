import React from 'react';
import './BlogStyle.css';
import BlogItem from './BlogItem';

class Blogs extends React.Component{
    componentDidMount() {
        if (this.props.marginTop === "big") {
            document.querySelector(".blogs").classList = ["blogs blogs-mg"];
        }
    }

    render(){
        let title = this.props.title;
        let blogItem = this.props.blogArray.map((item) => (
            <BlogItem key={item.id} title={item.title}
                      text={item.text} img={item.thumbnail} type={item.type} />
        ));
        return(
            <div className="blogs">
                {title === true ? <div className="section__title">Blogs</div> : ""}
                <div className="blog__items">
                    {blogItem}
                </div>
            </div>
        );
    }
}

export default Blogs;