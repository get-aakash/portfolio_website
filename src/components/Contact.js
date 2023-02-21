import React from 'react'
import Layout from './Layout'

const Contact = () => {
  return (
    <Layout>
      <section className="section6 flex" id="contact">
      <h1 className="title">Get In Touch</h1>
      <div className="socials flex">
        <a href='https://www.linkedin.com/in/aakash-acharya/'><i  className="fa-brands fa-linkedin-in"></i></a>
        <a href='https://www.facebook.com/aakash.acharya.56/'><i className="fa-brands fa-facebook"></i></a>
        <a href='https://github.com/get-aakash'><i className="fa-brands fa-github"></i></a>
        <i className="fa-brands fa-twitter"></i>
      </div>
      <h1>OR</h1>
      <div className="email-section flex">
        <p>reach out over email</p>
        <div className="email">
          <a href="mailto:mail.aakash108@gmail.com">mail.aakash108@gmail.com
          
            <i className="fa-solid fa-paper-plane" style={{color:"white"}}></i>
          
          </a>
        </div>
      </div>
    </section>
    </Layout>
    
  )
}

export default Contact
