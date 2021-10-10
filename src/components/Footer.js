import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items contact">
            <h3>Contact Me</h3>
            <a href="">
              <i class="fas fa-envelope social" />
              helena.aslanidou@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/eleni-aslanidou/">
              <i class="fab fa-linkedin social" />
              eleni-aslanidou
            </a>
            <a href="https://github.com/eleniaslanidou89">
              <i class="fab fa-github-square social" />
              eleniaslanidou89
            </a>
          </div>
          <div class="footer-link-items">
            <h3>Code</h3>
            <Link to="">JavaScript</Link>
            <Link to="">Typescript</Link>
            <Link to="">HTML5</Link>
            <Link to="">CSS</Link>
            <Link to="">GraphQL</Link>
            <Link to="">Bootstrap</Link>
            <Link to="">Material UI</Link>
            <Link to="">Tailwind</Link>
            <Link to="">CSSModules</Link>
          </div>
          <div class="footer-link-items">
            <h3>Framework</h3>
            <Link to="">React.js</Link>
            <Link to="">Angular</Link>
            <Link to="">Next.js</Link>
            <Link to="">Vue.js</Link>
          </div>
          <div class="footer-link-items">
            <h3>Toolbox</h3>
            <Link to="">Visual Studio Code</Link>
            <Link to="">Trello</Link>
            <Link to="">Slack</Link>
            <Link to="">GitHub</Link>
            <Link to="">Fork</Link>
            <Link to="">Linear</Link>
            <Link to="">Figma</Link>
            <Link to="">Sketch</Link>
            <Link to="">Miro</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="" className="social-logo">
              Eleni's Portfolio
            </Link>
          </div>
          <small class="website-rights">Eleni's Portfolio © 2021</small>
        </div>
      </section>
    </div>
  )
}

export default Footer
