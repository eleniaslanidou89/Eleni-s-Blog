import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
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
            <p>JavaScript</p>
            <p>Typescript</p>
            <p>HTML5</p>
            <p>CSS</p>
            <p>GraphQL</p>
            <p>Bootstrap</p>
            <p>Material UI</p>
            <p>Tailwind</p>
            <p>CSSModules</p>
          </div>
          <div class="footer-link-items">
            <h3>Framework</h3>
            <p>JavaScript</p>
            <p>Typescript</p>
            <p>HTML5</p>
            <p>CSS</p>
            <p>GraphQL</p>
            <p>Bootstrap</p>
            <p>Material UI</p>
            <p>Tailwind</p>
            <p>CSSModules</p>
          </div>
          <div class="footer-link-items">
            <h3>Toolbox</h3>
            <p>Visual Studio Code</p>
            <p>Trello</p>
            <p>Slack</p>
            <p>GitHub</p>
            <p>Fork</p>
            <p>Linear</p>
            <p>Figma</p>
            <p>Sketch</p>
            <p>Miro</p>
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
