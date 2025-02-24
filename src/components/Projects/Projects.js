import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fullStack from "../../Assets/Projects/fullStack.png";
import movieGPT from "../../Assets/Projects/movieGPT.png";
import foodPoint from "../../Assets/Projects/foodPoint.png";
import youtube from "../../Assets/Projects/youtube.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fullStack}
              isBlog={false}
              title="Full-Stack Music Player"
              description="A simple music player application retrieving music data from the backend and playing it in the UI. Built with Flask for the backend and OWL framework for the frontend. Features search, playlist management, and real-time music playback."
              ghLink="https://github.com/sanjay07sharma/Full-Stack"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieGPT}
              isBlog={false}
              title="Movie GPT"
              description="A movie recommendation system built using React and integrated with OpenAI's GPT model and Anthropic AI SDK for enhanced suggestions. Features login/signup, movie browsing, and AI-driven movie recommendations. Uses Firebase for authentication and TMDB API for movie data."
              ghLink="https://github.com/sanjay07sharma/movieGPT"
              demoLink="https://www.awesomescreenshot.com/video/29254993?key=ad9681b124370b38d7d67e869da92620"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodPoint}
              isBlog={false}
              title="FoodPoint"
              description="A React-based food ordering app featuring Parcel for bundling, Redux Toolkit for state management, and Jest for testing. Implements lazy loading, HMR, and efficient API fetching to enhance performance."
              ghLink="https://github.com/sanjay07sharma/ReactJs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="YouTube Clone"
              description="A YouTube clone built using React with Redux Toolkit for state management. Features a dynamic UI with video search, categories, likes, and comments. Implements efficient API calls and lazy loading for performance optimization."
              ghLink="https://github.com/sanjay07sharma/youtube"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
