import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/video/video-1.mp4" autoPlay loop muted />
      <h1>Eleni Aslanidou</h1>
      <p>Front-end Developer</p>
      <span>Hello! My name is Eleni Aslanidou. I am Front-end Developer. I have bachelor in IT and Communications Engineering. As a person I have great energy and I am thinking in a positive way. I have the "of course I can" attitude because I am not afraid of new challenges. I always strive to improve myself.</span>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER{' '}
          <i
            className="far
          fa-play-circle"
          />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
