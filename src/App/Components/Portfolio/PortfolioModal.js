import React from 'react';

class PortfolioModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        let modal = document.querySelector(".portfolio__modal");
        modal.addEventListener("keydown", this.handleKeyPress);
    }

    handleKeyPress(event) {
        if (event.key === "ArrowRight") {
            this.props.nextModal();
        } else if (event.key === "ArrowLeft") {
            this.props.prevModal();
        }
    }

    render() {
        return (
            <div className="portfolio__modal" onClick={this.props.close} tabIndex="0">
                <div className="portfolio__modal-left">
                    <button className="portfolio__modal-nav portfolio__modal-prev"
                        onClick={this.props.prevModal}>
                        <svg className="bi bi-chevron-left" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </button>
                </div>
                <div className="portfolio__modal-inner">
                    <div className="portfolio__modal-title">
                        {this.props.title}
                    </div>
                    <div className="portfolio__modal-author">
                        {this.props.author}
                    </div>
                    <div className="portfolio__modal-img">
                        <img src={this.props.img} alt="" />
                    </div>
                </div>
                <div className="portfolio__modal-right">
                    <button className="portfolio__modal-close"
                        onClick={this.props.close}>
                        <svg className="bi bi-x" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z" />
                            <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z" />
                        </svg>
                    </button>
                    <button className="portfolio__modal-nav portfolio__modal-next"
                        onClick={this.props.nextModal}>
                        <svg className="bi bi-chevron-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </div>
            </div>
        );
    }
}

export default PortfolioModal;