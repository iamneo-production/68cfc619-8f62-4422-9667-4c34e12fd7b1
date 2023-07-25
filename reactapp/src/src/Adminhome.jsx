import React from 'react';
import './Home.css';
import img from './assets/log.png';
import img1 from './assets/Policy.png';
import img2 from './assets/Terms.png';
import img3 from './assets/FAQ.png';

import { Link } from "react-router-dom";
import Feedback from './Feedback';
import About from './About';
import Task from './Task';
import View from './View';
import Edit from './Edit';
import Delete from './Delete';
import Quick from './Quick';
import Dashboard from './Dashboard';
import Calender from './Calender';

function Home() {
  return (
    <div>
      <div className="wrapper">
        <nav className="navbar">
          <img className="logoimg" src={img} alt="Logo"/>
          <ul>
            <li><a className="active" href="">Home</a></li>
            <li><Link to="/Dashboard" target="blank">Dashboard</Link></li>
            <li><Link to="/Quick" target="blank">Quick Add</Link></li>
            <li><Link to="/Calender" target="blank">Calender</Link></li>
            <li><Link to="/About" target="blank">About</Link></li>
            <li><Link to="/Feedback" target="blank">Feedback</Link></li>
            <li className="dropdown">
              <button className="dropbtn">Profile</button>
              <div className="dropdown-content">
              {/* <div className="view"></div>
                <a href="#">View</a> */}
                {/* <div className="edit"></div>
                <a href="#">Edit</a> */}
                <div className="logout"></div>
                <a href="/">Logout</a>
              </div>
            </li>
          </ul>
        </nav>
        <div className="center">
          <h1>Welcome Admin!</h1>
          <h2>Monitor User's Workflow...</h2>
          <div className="buttons">
          <Link to="/Userd"><button className="btn2">User Details</button></Link>
          <Link to="/Deleteu"><button className="btn2">Delete User</button></Link>
          <Link to="/Userfeed"><button className="btn2">User Feedbacks</button></Link>
          <Link to="/Deletefeed"><button className="btn2">Delete Feedback</button></Link>

          </div>
        </div>
      </div>
      <footer>
        <div className="footer">
          <div className="row">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <a href="https://www.facebook.com/" target="blank" class="fa fa-facebook"></a>
          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den" target="blank" class="fa fa-twitter"></a>
          <a href="https://www.google.com/" target="blank" class="fa fa-google"></a>
          <a href="https://www.linkedin.com/" target="blank" class="fa fa-linkedin"></a>
          <a href="https://www.youtube.com/" target="blank" class="fa fa-youtube"></a>
          <a href="https://www.instagram.com/" target="blank" class="fa fa-instagram"></a>      
          </div>

          <div className="row">
            <ul>
            <li><a href="mailto:almithadency@example.com"> Contact us</a></li>
              <li><a href={img1} target="blank">Privacy Policy</a></li>
              <li><a href={img2} target="blank">Terms & Conditions</a></li>
              <li><a href={img3} target="blank">FAQ</a></li>
            </ul>
          </div>

          <div className="row">
            TO-DO SPRINT Copyright © 2023 ALMITHA DENCY -
            All rights reserved || Designed By: ALCY
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
