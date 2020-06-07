import React from 'react';
import './PortfolioStyle.css';

import PortfolioItem from './PortfolioItem';
import PortfolioModal from './PortfolioModal';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalActive: false,
            modalId: "",
            modalTitle: "",
            modalAuthor: "",
            modalImg: "",
        };
        this.handleItemClick = this.handleItemClick.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.prevModal = this.prevModal.bind(this);
        this.nextModal = this.nextModal.bind(this);
    }

    componentDidMount() {
        if (this.props.marginTop === "big") {
            document.querySelector(".portfolio").classList = ["portfolio portfolio-mg"];
        }
    }

    handleItemClick(event) {
        let target = event.target;
        this.setState({
            isModalActive: true,
            modalId: target.id
        }, () => {
            this.props.portfolioArray.map((item) => {
                if (item.id == this.state.modalId) {
                    this.setState({
                        modalTitle: item.title,
                        modalAuthor: item.author,
                        modalImg: item.img
                    })
                }
            });
            let body = document.querySelector("body");
            body.classList = ["body-no-scroll"];
        });
    }

    closeModal(event) {
        let btn = document.querySelector(".portfolio__modal-close");
        let overlay = document.querySelector(".portfolio__modal");
        if (event.target === btn || event.target === overlay) {
            this.setState({
                isModalActive: false,
                modalId: ""
            }, () => {
                let body = document.querySelector("body");
                body.classList = [""];
            });
        }
    }

    prevModal() {
        let currModal = this.state.modalId;
        if (currModal > 1) {
            currModal--;
            this.setState({
                modalId: currModal
            }, () => {
                this.props.portfolioArray.map((item) => {
                    if (item.id == this.state.modalId) {
                        this.setState({
                            modalTitle: item.title,
                            modalAuthor: item.author,
                            modalImg: item.img
                        })
                    }
                });
            });
        }
    }

    nextModal() {
        let currModal = this.state.modalId;
        if (currModal < document.querySelectorAll(".portfolio__item").length) {
            currModal++;
            this.setState({
                modalId: currModal
            }, () => {
                this.props.portfolioArray.map((item) => {
                    if (item.id == this.state.modalId) {
                        this.setState({
                            modalTitle: item.title,
                            modalAuthor: item.author,
                            modalImg: item.img
                        })
                    }
                });
            });
        }
    }

    render() {
        let portfolioArray = this.props.portfolioArray;
        let portfolioItems = portfolioArray.map((item) => (
            <PortfolioItem
                key={item.id}
                id={item.id}
                img={item.img}
                type={item.type}
                handleClick={this.handleItemClick} />
        ));
        return (
            <div className="portfolio">
                {this.props.title !== false ? <div className="section__title">Portfolio</div> : ""}
                <div className="portfolio__items">
                    {portfolioItems}
                    {this.state.isModalActive ? <PortfolioModal
                        img={this.state.modalImg}
                        title={this.state.modalTitle}
                        author={this.state.modalAuthor}
                        close={this.closeModal}
                        prevModal={this.prevModal}
                        nextModal={this.nextModal} /> : ""}
                </div>
            </div>
        );
    }
}

export default Portfolio;