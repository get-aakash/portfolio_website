import React from 'react'
import Layout from './Layout'

const Info = () => {
  return (
    
        <section className="flex section2">
      <div className="flex info-container">
        <div className="flex info-lists">
          <div className="icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <h5>Software Engineering</h5>
            <p>Post-Graduate</p>
          </div>
        </div>
        <div className="info-divider"></div>
        <div className="flex info-lists">
          <div className="icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <h5>5+ Projects</h5>
            <p>Completed</p>
          </div>
        </div>
        <div className="info-divider"></div>
        <div className="flex info-lists">
          <div className="icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <h5>1 Yr Coding</h5>
            <p>Experience</p>
          </div>
        </div>

      </div>
    </section>
    
    
  )
}

export default Info
