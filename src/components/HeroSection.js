import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import { FaPlayCircle } from 'react-icons/fa';
import Video from '../videos/video-1.mp4';


const HeroSection = () => {
    return (
        <div className="hero-container">
            <video src={Video} autoPlay loop muted/>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline' buttonSize="btn--large">GET STARTED</Button>
                <Button className="btns" buttonStyle='btn--primary' buttonSize="btn--large">WATCH TRAILER<FaPlayCircle className="fa-play-circle"/></Button>
            </div>
        </div>
    )
}

export default HeroSection;
