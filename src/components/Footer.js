import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container flex" >
        <div className="footer-top flex">
          <div>
            <h3>LINKS</h3>
            <ul className="flex">
              <li>Home</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3>EXTERNAL LINKS</h3>
            <ul className="flex">
              <li>YouTube</li>
              <li>LinkedIn</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom flex">
          <h1>Aakash | Web Developer</h1>
          <p>&copy; | All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
