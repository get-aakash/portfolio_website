import React from 'react'
import profile_image from "../assets/profile_image.png"
import aakash_resume from "../assets/aakash_resume.pdf"


const Hero = () => {
  return (
    <section className="section1 grid" id="home">
      <div className="left"><img src={profile_image} alt=""/></div>
      <div className="right flex">
        <div>
          <h2 className="name">Aakash Acharya</h2>
          <p className="tag">Web Developer</p>

        </div>
        <a href={aakash_resume} download="">
          <button>
            Download Resume
            <i className="fa-solid fa-download"></i>
          </button>
        </a>
      </div>
    </section>
  )
}

export default Hero
