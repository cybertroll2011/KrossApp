import React from 'react';
import './BlogStyle.css';
import Blogs from '../../Components/Blog/Blogs';
import Clients from '../../Components/Clients/Clients';
import ContactForm from '../../Components/ContactForm/ContactForm';
import Footer from '../../Components/Footer/Footer';

// blog thumbnails
import blogImg1 from '../../Assets/Images/Blogs/blog-thumbnail-1.jpg';
import blogImg2 from '../../Assets/Images/Blogs/blog-thumbnail-2.jpg';
import blogImg3 from '../../Assets/Images/Blogs/blog-thumbnail-3.jpg';
import blogImg4 from '../../Assets/Images/Blogs/blog-thumbnail-4.jpg';
import blogImg5 from '../../Assets/Images/Blogs/blog-thumbnail-5.jpg';
import blogImg6 from '../../Assets/Images/Blogs/blog-thumbnail-1.jpg';

class Blog extends React.Component {
    render() {
        const blogArray = [
            {
                id: 1,
                title: "Amazon increase income 1.5 Million",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                thumbnail: blogImg1,
                type: "E-Commerce"
            },
            {
                id: 2,
                title: "My increase income 40 griven",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                thumbnail: blogImg2,
                type: "E-Commerce"
            },
            {
                id: 3,
                title: "Amazon increase income 1.5 Million",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                thumbnail: blogImg3,
                type: "Creative"
            },
            {
                id: 4,
                title: "Amazon increase income 1.5 Million",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                thumbnail: blogImg4,
                type: "E-Commerce"
            },
            {
                id: 5,
                title: "My increase income 40 griven",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                thumbnail: blogImg5,
                type: "E-Commerce"
            },
            {
                id: 6,
                title: "Amazon increase income 1.5 Million",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                thumbnail: blogImg6,
                type: "Creative"
            }
        ]
        return (
            <div className="blog">
                <div className="blog__intro-background"></div>
                <div className="container">
                    <div className="blog__inner">
                        <div className="intro blog__intro">
                            <div className="intro__title">Blogs</div>
                        </div>
                        <Blogs
                            blogArray={blogArray} />
                        <Clients />
                    </div>
                </div>
                <ContactForm />
                <Footer />
            </div>
        );
    }
}

export default Blog;