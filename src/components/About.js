import React from 'react'
import profile_image from "../assets/profile_image.png"
import Layout from './Layout'

const About = () => {
  return (
    <Layout>
      <section className="section5 flex" id="about">
      <h1 className="title">About Me</h1>
      <div className="about-container flex">
        <div className="left flex">
          <div className="bg"></div>
          <img src={profile_image} alt=""/>
        </div>
        <div className="right flex">
          <h1>Aakash Acharya</h1>
          <p>I grew up in Nepal and currently living in sydney, Australia</p>
          <p>Sydney, Australia</p>
          <a href="">Connect with me</a>
          <div className="flex">
            <div className="tag">Interests</div>
            <div>
              <span>Coding</span>
              <span>Reading</span>
              <span>Sports</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Layout>
    
    
  )
}

export default About
