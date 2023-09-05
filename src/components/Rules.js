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
            <a href='/'><button className="rules-button">Home</button></a>
          </div>
    
          <div className="main-content1">
            <h2 className='animate1'>Judging Criteria:</h2>
            <p>1. Round 1: 5 marks will be allocated to each fully solved short coding question.
You won't be allowing to use backspace ( Backspace is completely disabled )
Total: 15 points</p>
<p>2. Round 2: 20 marks will be allocated to the fully solved real life coding question.
The complete screen is blurred in this round.</p>
Game Rules:
<p>1. The entire event consists of 2 rounds with a total of 35 points.</p>
<p>2. Each student will be allowed to participate in all the rounds.</p>
<p>3. Participants whose code gets executed will be given higher preference.</p>
<p>4. The second preference will be given to code with the least number of errors.</p>
<p>5. In case of the same points at the end of competition, ties will be broken by
Considering the total time taken by each student in ascending order of time.</p>
<p>6. Any participant found to be indulging in any form of malpractice will be
immediately disqualified.</p>
<p>7. Each student is only allowed to choose from the given programming
languages to code in.</p>
<p>8. Time limit given will be the same for everyone.</p>
          </div>
        </div>
      );
    }

export default Home;