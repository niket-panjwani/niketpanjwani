import React from 'react';
import './styles/Home.css'
import animoji from '../assets/images/animoji.png'

const Home = () => {
  return (
    <div className="home">
      <div className="text">
        <h1>Hey there <span className="shake">👋🏻</span> I'm Niket Panjwani</h1>
        <p>
          I'm a dedicated Software Engineer with expertise in both front-end 
          and back-end development. My passion for technology drives me to 
          create innovative software solutions that enhance user experiences 
          and solve real-world problems. With a keen eye for detail and a 
          commitment to excellence, I continuously seek to push the boundaries 
          of what's possible in software engineering. 
        </p>
      </div>
      <div className="gradient-background">
        <img src={animoji}  alt="animoji" className="my-image"/>
      </div>
    </div>
  );
};

export default Home;