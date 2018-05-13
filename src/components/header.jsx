import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="1"/>
          <Col sm="10">
            <center><h1 className="headerFont">Steve Bogucki</h1></center>
          </Col>
          <Col sm="1"/>
        </Row>
        <Row className="componentText">
          <Col>
            <a href="mailto:stevebogucki12@gmail.com" className="fontSmall">
              stevebogucki12@gmail.com
            </a>
          </Col>
          <Col className="fontSmall">
            <center>(813) 446 6704</center>
          </Col>
          <Col className="fontSmall" id="alignRight">
            Long Beach, CA
          </Col>
        </Row>
      </Container>
    );
  }
}
