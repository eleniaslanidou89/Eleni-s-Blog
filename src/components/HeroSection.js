import React from 'react'
import '../App.css'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/video/video-1.mp4" autoPlay loop muted />
      <h1>Eleni Aslanidou</h1>
      <p>Front-end Developer</p>
        {/* Hello! My name is Eleni Aslanidou. I am Front-end Developer. I have
        bachelor in IT and Communications Engineering. As a person I have great
        energy and I am thinking in a positive way. I have the "of course I can"
        attitude because I am not afraid of new challenges. I always strive to
        improve myself.

        Positive, hardworking and enthusiastic Frond-end Developer. 🧠Passionate learner. Open to opportunities that will allow me to contribute and also develop myself. 🌱 I love building something from nothing and enjoy troubleshooting. ☁️I find coding relaxing. */}
        <span>
        Hello! My name is Eleni Aslanidou. I just completed the two years course Frontend Developer at KYH and finished my internship in Vinden AB. I have a bachelor degree in IT Communication Engineering.
        </span>
        <br />
        <span>
        During my internship I had the chance to exercise the knowledge I gained on Web development the last years. My focus and attention to detail combined with my knowledge on JavaScript, HTML and React are my strong points. More specifically I worked with REST APIs, React and Next.js.
        </span>
        <br />
        <span className="last">
        My problem-solving mindset, and my excellent communication skills would make me a good fit in any team. As a great team player, I would love to be part of a team, where I can learn and contribute.
      </span>
      <br />
      <br />
    </div>
  )
}

export default HeroSection
