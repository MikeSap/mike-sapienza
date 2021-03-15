import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { SiGithub } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";

import staged from "../assets/Staged_Screenshot.png";
import dcccviii from "../assets/DCCCVIII_Screenshot.png";
import recipalooza from "../assets/recipalooza_screenshot.png";
import eventopedia from "../assets/eventopedia_screenshot.png";

const Projects = (props) => {
  const projectLinks = (heroku, gitF, gitB) => {
    return (
      <>
        {heroku ? (
          <a target="_blank" rel="noopener noreferrer" href={heroku}>
            <BiLinkExternal />
          </a>
        ) : null}

        {gitF ? (
          <a target="_blank" rel="noopener noreferrer" href={gitF}>
            <SiGithub />
          </a>
        ) : null}
        {gitB ? (
          <a target="_blank" rel="noopener noreferrer" href={gitB}>
            <SiGithub />
          </a>
        ) : null}
      </>
    );
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="projects">
      <div className="projects-header">
        <h3>Projects</h3>
      </div>
      <Carousel
        arrows={true}
        // renderButtonGroupOutside={true}
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // server side rendering
        infinite={true}
        autoPlay={
          // props.deviceType !== "mobile" ? true :
          false
        }
        // autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        // transitionDuration={2000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-5-vw"
      >
        <Card className="project">
          <Card.Header>Staged</Card.Header>
          <Image src={staged} />

          <Card.Text>
            Staged is a social media platform for musicians to promote their
            upcoming artistic releases in a curated space
          </Card.Text>

          <Card.Footer className="text-muted project">
            {projectLinks(
              "https://staged-app.herokuapp.com",
              "https://github.com/MikeSap/Staged_Frontend",
              "https://github.com/MikeSap/Staged_Backend"
            )}
          </Card.Footer>
        </Card>

        <Card className="project">
          <Card.Header>DCCCVIII</Card.Header>

          <Image src={dcccviii} fluid />

          <Card.Text>
            A drum machine inspired by retro hardware where users can create and
            save unique songs created within the app
          </Card.Text>

          <Card.Footer className="text-muted">
            {projectLinks(
              "https://dcccviii.herokuapp.com",
              "https://github.com/MikeSap/DCCCVIII"
            )}
          </Card.Footer>
        </Card>

        <Card className="project">
          <Card.Header>Eventopedia</Card.Header>

          <Image src={eventopedia} fluid />

          <Card.Text>
            An all in one app for companies within the live events industry to
            manage employee schedules and rental inventory
          </Card.Text>

          <Card.Footer className="text-muted">
            {projectLinks(null, "https://github.com/MikeSap/eventopedia")}
          </Card.Footer>
        </Card>

        <Card className="project">
          <Card.Header>Recipalooza</Card.Header>

          <iframe
            className="youtubeDemo"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0XECIzAGbko"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <Card.Text>
            CLI App written in ruby that searches for recipes from spoonacular
            api based on ingredients in a user's pantry
          </Card.Text>

          <Card.Footer className="text-muted">
            {projectLinks(null, "https://github.com/MikeSap/Recipalooza")}
          </Card.Footer>
        </Card>
      </Carousel>
    </div>
  );
};

export default Projects;
