import React from 'react'
import './Footer.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        {/* <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p> */}
        {/* <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div> */}
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Contact Me</h2>
            <Link to="/"><i class="fas fa-envelope"></i>helena.aslanidou@gmail.com</Link>
            <Link to="/"><i class="fab fa-linkedin" />https://www.linkedin.com/in/eleni-aslanidou/</Link>
          </div>
          <div class="footer-link-items">
            <h2>CODE:</h2>
            <Link to="/">JavaScript</Link>
            <Link to="/">HTML5</Link>
            <Link to="/">CSS</Link>
            <Link to="/">GraphQL</Link>
            <Link to="/">Bootstrap</Link>
            <Link to="/">Material UI</Link>
            <Link to="/">Tailwind</Link>
            <Link to="/">CSSModules</Link>
          </div>
          <div class="footer-link-items">
            <h2>Framework:</h2>
            <Link to="/">React.js</Link>
            <Link to="/">Angular</Link>
            <Link to="/">Next.js</Link>
            <Link to="/">Vue.js</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Me</h2>
            <Link to="/"><i class="fas fa-envelope"></i>helena.aslanidou@gmail.com</Link>
            <Link to="/"><i class="fab fa-linkedin" />https://www.linkedin.com/in/eleni-aslanidou/</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Eleni's Portfolio
            </Link>
          </div>
          <small class="website-rights">Eleni's Portfolio © 2021</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
