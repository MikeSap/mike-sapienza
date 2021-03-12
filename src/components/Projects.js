import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const Projects = (props) => {
  const projectLinks = (heroku, gitF, gitB) => {
    return (
      <>
        {heroku ? (
          <a target="_blank" rel="noopener noreferrer" href={heroku}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-box-arrow-up-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
              />
              <path
                fill-rule="evenodd"
                d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
              />
            </svg>
          </a>
        ) : null}

        {gitF ? (
          <a target="_blank" rel="noopener noreferrer" href={gitF}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        ) : null}
        {gitB ? (
          <a target="_blank" rel="noopener noreferrer" href={gitB}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
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
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Container className="projects">
      <div className="projects-header">
        <h3>Projects</h3>
      </div>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
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
        <Card className="text-center project">
          <Card.Header>Staged</Card.Header>
          <Card.Body>
            <Card.Text>
              Staged is a social media platform for musicians to promote their
              art in a curated space
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">
            {projectLinks(
              "https://staged-app.herokuapp.com",
              "https://github.com/MikeSap/Staged_Frontend",
              "https://github.com/MikeSap/Staged_Backend"
            )}
          </Card.Footer>
        </Card>

        <Card className="text-center project">
          <Card.Header>DCCCVIII</Card.Header>
          <Card.Body>
            <Card.Text>
              A drum machine inspired by retro hardware where users can create
              and save unique songs created within the app
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">
            {projectLinks(
              "https://dcccviii.herokuapp.com",
              "https://github.com/MikeSap/DCCCVIII"
            )}
          </Card.Footer>
        </Card>

        <Card className="text-center project">
          <Card.Header>Eventopedia</Card.Header>
          <Card.Body>
            <Card.Text>
              An app for companies within the live events industry to manage
              schedules and inventory
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">
            {projectLinks(null, "https://github.com/MikeSap/eventopedia")}
          </Card.Footer>
        </Card>

        <Card className="text-center project">
          <Card.Header>Recipalooza</Card.Header>
          <Card.Body>
            <Card.Text>
              CLI App written in ruby that searches for recipes from spoonacular
              api based on ingredients in a user's pantry
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">
            {projectLinks(null, "https://github.com/MikeSap/Recipalooza")}
          </Card.Footer>
        </Card>
      </Carousel>
    </Container>
  );
};

export default Projects;
