import React from 'react';
import logo from '../images/logomain.png'
import './Home.css';

function Home(){
    return (
        <div className="home-container">
          <div className="navbar">
            <img
              src={logo}
              alt="Your Logo"
              className="logo"
            />
            <h1 id="navbar-title">TechnoSummit '23</h1>
            <a href='/rules'><button className="rules-button">Rules</button></a>
          </div>
    
          <div className="main-content">
            <h2>Welcome to <span className='animate'>Code Mystery</span></h2>
            <p>Unlock the unseen code : Embrace the journey of coding mastery</p>
            <a href='/round1'><button className="round">Round 1</button></a>
            <a href='/round2'><button className="round">Round 2</button></a>
          </div>
        </div>
      );
    }

export default Home;