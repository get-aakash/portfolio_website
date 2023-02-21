import React from 'react'
import project1 from "../assets/project1.jpg"
import calculator from "../assets/calculator.png"
import movieapi from "../assets/movieapi.png"
import nottodolist from "../assets/nottodolist.png"
import portfolio from "../assets/portfolio.png"
import Layout from './Layout'

const Project = () => {
  return (
    <Layout>
      <section className="section4 flex" id="projects">
      <h1 className="title">My Projects</h1>
      <div className="projects-container grid">
        <div className="project-card flex">
          <div className="top">
          <a href='https://github.com/get-aakash/movie-api2.git'>
            <img src={movieapi} alt="Movie API"/>
            </a>
          </div>
          <div className="bottom">
          <a href='https://github.com/get-aakash/movie-api2.git'>
            <p>February2, 2023</p>
            <p>Movie API Web Application Built Using React</p>
            </a>
          </div>
        </div>
        <div className="project-card flex">
          <div className="top">
            <a href="https://github.com/get-aakash/portfolio_website.git">
            <img src={portfolio} alt=""/>
            </a>
          </div>
          <div className="bottom">
          <a href="https://github.com/get-aakash/portfolio_website.git">
            <p>January4, 2023</p>
            <p>Portfolio Web Application Built Using React</p>
            </a>
          </div>
        </div>
        <div className="project-card flex">
          <div className="top">
            <a href='https://github.com/get-aakash/react-not-todo-list.git'>
            <img src={nottodolist} alt=""/>
            </a>
          </div>
          <div className="bottom">
            <a href='https://github.com/get-aakash/react-not-todo-list.git'>
            <p>December23, 2022</p>
            <p>Not-TO-DoList Web Application Built Using React</p>
            </a>
          </div>
        </div>
        <div className="project-card flex">
          <div className="top">
            <a href='https://github.com/get-aakash/calculator.git'>
            <img src={calculator} alt=""/>
            </a>
          </div>
          <div className="bottom">
            <a href='https://github.com/get-aakash/calculator.git'>
            <p>December2, 2022</p>
            <p>alculator Web Application Built Using HTML and CSS</p>
            </a>
          </div>
        </div>

      </div>
    </section>
    </Layout>
    
  )
}

export default Project
