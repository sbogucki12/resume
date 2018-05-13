import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";

export default class Intro extends Component {
  render() {
    return (
      <Container>
        <Row className="fontSmall">
          
          <Col>
            <p className="componentText">View this resume online at http://bogoodski.com</p>
          </Col>
          <Col>
            <p id="alignRight" className="componentText">Download a <a href="../../src/content/resumeBogucki.pdf" target="_blank" rel="noreferrer noopener">.PDF copy</a> of this resume</p>            
          </Col>
          
        </Row>
        </Container>
    );
  }
}
