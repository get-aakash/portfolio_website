import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container flex" >
        <div className="footer-top flex">
          <div>
            <h3>LINKS</h3>
            <ul className="flex">
              <li><a href="#home">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3>EXTERNAL LINKS</h3>
            <ul className="flex">
              <a href='https://www.linkedin.com/in/aakash-acharya/'><li>LinkedIn</li></a>
              <a href='https://github.com/get-aakash'><li>GitHub</li></a>
            </ul>
          </div>
        </div>
        <div className="footer-bottom flex">
          <h1>Aakash | Software Engineer</h1>
          <p>&copy; | All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
