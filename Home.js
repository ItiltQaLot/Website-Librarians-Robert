import { Link } from 'react-router-dom'
import React from 'react';
import './Home.css';
import Insight from './Insight';


function Home() {
  return (
    <div className="divBack">
      <div id="header">
        Librarians
      </div>
      <div className="textBack">
        <div className="text">
        <h1>Our Purpose:</h1>
          <p>Design a fully-functioning and incredibly impactful product into the library space to help improve the everyday library's trajectory for the future.
          </p>
        <h1>Why?</h1>
          <p>The various systems of libraries, whether it be federal or independent, are facing the troubles of a constantly digitizing future. With the increasing complication of budgeting, resource dispertion, and keeping the library a young, and attractive venue, it's a market starving for something fresh and new.
          </p>
          <p>Improving the library industry could prove to have many positive effects. Most notably, the system and its resources already exist. Modernizing and reworking an already etablished and prominent system can be much more cost effect and beneficial to creating a completely independent and alternate from the ground up. 
          </p>
          <p>Additionally, the library is a staple community location across all communities of America. Bringing life back to the library could improve an overall sense of community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
