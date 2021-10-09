import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            My Portfolio
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
