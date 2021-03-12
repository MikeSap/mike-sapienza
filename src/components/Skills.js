import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import {
  SiReact,
  GrReactjs,
  SiHtml5,
  SiRuby,
  SiCss3,
  SiPostgresql,
} from "react-icons/fa";

function Skills() {
  return (
    <Container className="skills">
      <div className="skills-header">Skills</div>
      <Row>
        <Col>
          <Card className="text-center skill">
            <Card.Body>
              <Card.Header>Technologies</Card.Header>
              <Card.Text>JavaScript HTML5 Ruby CSS PostgreSQL SQLite</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center skill">
            <Card.Body>
              <Card.Header>Frameworks/Libraries</Card.Header>
              <Card.Text>
                React Redux Rails Bootstrap Semantic UI Strapi{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center skill">
            <Card.Body>
              <Card.Header>Tools</Card.Header>
              <Card.Text>Git Heroku VSCode Postman Figma Trello</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
