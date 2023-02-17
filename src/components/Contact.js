import React from 'react'

const Contact = () => {
  return (
    
    <section className="section6 flex" id="contact">
      <h1 className="title">Get In Touch</h1>
      <div className="socials flex">
        <i className="fa-brands fa-linkedin-in"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-github"></i>
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
  )
}

export default Contact
