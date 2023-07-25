import React, { useEffect } from 'react';
import './First.css';
import video from './assets/video.mp4';
import img from './assets/log.png';
import { Link } from "react-router-dom";
import Login from './Login';
import AdminLogin from './AdminLogin';


const First = () => {
  useEffect(() => {
    const handleToggleClick = () => {
      menuToggle.classList.toggle('active');
      showcase.classList.toggle('active');
    };

    const menuToggle = document.querySelector('.toggle');
    const showcase = document.querySelector('.showcase');

    menuToggle.addEventListener('click', handleToggleClick);

    return () => {
      menuToggle.removeEventListener('click', handleToggleClick);
    };
  }, []);

  return (
    <div>
      <section className="showcase">
        <header>
          <h2 className="logo"></h2>
          <div className="toggle"></div>
        </header>
        <video src={video} muted loop autoPlay></video>
        <div className="overlay"></div>
        <div className="text">
          <img src={img}></img>
          <h2>Seize the day.</h2>
          <h3>Dominate your tasks like a pro!</h3>
          <p>"Experience the power of productivity in your hands with TODO SPRINT. 
            From personal task to team collaborations, 
            this is a one stop solution which offers the perfect balance of organization, 
            efficiency, and collaboration. Simplify your life, achieve more, and unleash your true potential. 
            Elevate your productivity journey today!"
</p>
        </div>
      </section>
      <div className="menu">
        <ul>
        <div className="admin"></div>
          <li><Link to="/AdminLogin">Admin Login</Link></li>
        <div className="user"></div>
        <li><Link to="/Login">User Login</Link></li>
          <div className="team"></div>
          <li><Link to="/Login">Team Login</Link></li>
          
        </ul>
      </div>
    </div>
  );
};

export default First;