import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class Freelance extends Component {
  render() {
    return (
      <Container className="fontSmall">
        <Row>
          <h1 className="componentHeader">Freelance Web Developer</h1>
        </Row>
        <Row>
          <p className="componentText">
            Web developer / Content owner:{" "}
            <a
              href="http://maxresistanceblog.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://maxresistanceblog.com
            </a>
          </p>
        </Row>
        <Row>
          <p className="componentText">
            Graduated:{" "}
            <a
              href="https://redwoodcodeacademy.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redwood Code Academy
            </a>
          </p>
        </Row>
        <Row>
          <p className="componentText">
            Completed{" "}
            <a
              href="https://i.imgur.com/SCZTWbW.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              numerous online courses
            </a>, to include:
          </p>
        </Row>
        <Row>
          <Col>
            <ul className="componentText">
              <li>
                <a
                  href="https://www.udemy.com/user/moshfeghhamedani/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mosh Hamedani's
                </a>{" "}
                C# Beginner, Intermediate, Advanced courses
              </li>
              <li>Build a Real World App with ASP.NET Core and Angular 2</li>
              <li>The Complete ASP.NET MVC 5 Course</li>
              <li>Learn ASP.NET Web API 2 for Absolute Beginner</li>
            </ul>
          </Col>
          <Col>
            <ul className="componentText">
              <li>
                <a
                  href="https://www.udemy.com/user/maximilian-schwarzmuller/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Maximilian Schwarzmuller's
                </a>{" "}
                Angular 6, The Complete Guide
              </li>
              <li>Learning Microsoft Transact - SQL</li>
              <li>Colt Steele's The Ultimate MySQL Bootcamp</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="componentText">
              Currently enrolled:{" "}
              <a
                href="https://www.edx.org/course/cs50s-introduction-computer-science-harvardx-cs50x"
                target="_blank"
                rel="noopener noreferrer"
              >
                Harvard's CS50, <i>Intro to Computer Science</i>
              </a>, online
            </p>
          </Col>
          <Col>
            My{" "}
            <a
              href="https://github.com/sbogucki12"
              target="_blank"
              rel="noreferrer noopener"
            >
              gitHub
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}
