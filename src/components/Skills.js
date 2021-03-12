import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import {
  DiRuby,
  DiJsBadge,
  DiHtml5,
  DiCss3,
  DiPostgresql,
  DiGithubBadge,
  DiGit,
  DiTrello,
} from "react-icons/di";

import {
  SiBootstrap,
  SiRails,
  SiStrapi,
  SiRedux,
  SiReact,
  SiPostman,
  SiHeroku,
  SiVisualstudio,
} from "react-icons/si";

function Skills() {
  return (
    <Container className="skills">
      <div className="skills-header">Skills</div>
      <Row>
        <Col>
          <Card className="skill">
            <Card.Body>
              <Card.Header>Technologies</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <DiJsBadge /> Javascript
                </ListGroup.Item>
                <ListGroup.Item>
                  <DiRuby /> Ruby
                </ListGroup.Item>
                <ListGroup.Item>
                  <DiHtml5 /> HTML5
                </ListGroup.Item>
                <ListGroup.Item>
                  <DiCss3 /> CSS
                </ListGroup.Item>
                <ListGroup.Item>
                  <DiPostgresql /> PostgreSQL
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center skill">
            <Card.Body>
              <Card.Header>Frameworks/Libraries</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <SiReact /> React/React Native
                </ListGroup.Item>
                <ListGroup.Item>
                  <SiRedux /> Redux
                </ListGroup.Item>
                <ListGroup.Item>
                  <SiRails /> Rails
                </ListGroup.Item>
                <ListGroup.Item>
                  <SiBootstrap /> Bootstrap
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center skill">
            <Card.Body>
              <Card.Header>Tools</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <DiGit /> <DiGithubBadge /> Git/Github
                </ListGroup.Item>
                <ListGroup.Item>
                  <SiVisualstudio /> VScode
                </ListGroup.Item>
                <ListGroup.Item>
                  <SiHeroku /> Heroku
                </ListGroup.Item>
                <ListGroup.Item>
                  <SiStrapi /> Strapi
                </ListGroup.Item>
                <ListGroup.Item>
                  <SiPostman /> Postman
                </ListGroup.Item>
                <ListGroup.Item>
                  <DiTrello /> Trello
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
