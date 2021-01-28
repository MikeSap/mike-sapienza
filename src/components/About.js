import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import img from "../assets/mikeSap.jpg";
import Email from "./Email";
import Container from "react-bootstrap/Container";
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from "react-icons/ai";

const About = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = (e) => {
    setShow(false);
    e.stopPropagation();
  };

  const handleShow = (e) => {
    setShow(true);
    e.stopPropagation();
  };

  // const openGit = () => {
  //   const win = window.open("https://github.com/MikeSap", "_blank");
  //   win.focus();
  // };

  return (
    <Container className="about">
      <div className="about-content">
        <div className="about-text">
          {/* Full Stack Developer | JavaScript | React | Redux | Ruby | Ruby on
          Rails */}
          Experienced live sound engineer making a career pivot to software
          engineering. With experience in the fast-paced events industry,
          working events such as Lollapalooza and being part of a team on
          international tours, my strong-suits include troubleshooting,
          attention to detail and working well on a team. Technologically minded
          and a quick learner, I am excited to learn new JavaScript frameworks
          and new languages as my career as a software engineer develops, while
          continuing to master React and Ruby on Rails. I have found that my
          expertise in a fast-paced technical environment has helped me to
          quickly understand code structures and handle data management. I also
          still pursue sound engineering opportunities. My degree is a Bachelor
          of Arts focused in live & installed sound from Columbia College
          Chicago and I also graduated from Flatiron School's Software
          Engineering bootcamp.
        </div>
        <div className="about-photo">
          <Image src={img} roundedCircle />
        </div>
        <div className="about-links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/mike-sapienza/"
            className="link"
          >
            <AiFillLinkedin className="alink" />
          </a>
          <div onClick={handleShow} className="link">
            <AiOutlineMail className="alink" />
            <Email show={show} handleClose={handleClose} />
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/MikeSap"
            className="link"
          >
            <AiFillGithub className="alink" />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default About;
