import React, { useState } from 'react'

const Header = ({setShowScreen}) => {
 
  return (
    <header className="flex primary-header">
      <div className="flex logo">
        <h1>Aakash Acharya</h1>
        <div>
          <h3 className="line">Software Engineer</h3>
        </div>
      </div>
      <div className="right">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkBtn">
          <i className="fa-solid fa-bars"></i>
        </label>
        <ul className="flex primary-navigation">
          <li>
            <a onClick= {()=>setShowScreen("")} href="#!">Home</a>
          </li>
          <li>
            <a onClick={()=>setShowScreen("skills")} href="#!">Skills</a>
          </li>
          <li>
            <a onClick={()=>setShowScreen("projects")} href="#!">Projects</a>
          </li>
          <li>
            <a onClick = {()=>setShowScreen("about")} href="#!">About</a>
          </li>
          <li>
            <a onClick={()=>setShowScreen("contact")} href="#!">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
