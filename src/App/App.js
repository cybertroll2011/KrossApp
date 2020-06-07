import React from 'react';
import './App.css';
import Header from './Components/Header/Header';

class App extends React.Component{
  constructor(props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll(){
    let header = document.querySelector(".header");
    let introHeight = document.querySelector(".intro").clientHeight;
    if ( window.scrollY > (introHeight - header.clientHeight ) ){
      header.classList = ["header header-scroll"];
    } else{
      header.classList = ["header"];
    }
  }

  render(){
    return(
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
