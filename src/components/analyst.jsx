import React, { Component } from "react";
import { Container, Row} from "reactstrap";
import "../App.css";

export default class Analyst extends Component {
  render() {
    return (
      <Container className="fontSmall">
        <Row>
            <h1 className="componentHeader">Data Analyst</h1>
        </Row>
        <Row>
          <p className="componentText">
            Designed, Deployed, Maintained office "Work Tracking System"
            database that monitored all incoming/outgoing correspondence and all
            work assignments and deadlines
          </p>
        </Row>
        <Row>
          <p className="componentText">
            Analyzed aviation safety data to provide insight and predictive
            modeling to office management
          </p>
        </Row>
        <Row><p className="componentText">Oversaw the office Quality Management System as the <a href="https://advisera.com/9001academy/knowledgebase/what-is-the-job-of-the-quality-management-representative/" target="_blank" rel="noopener noreferrer">ISO 9001 Quality Representative</a></p></Row>
        <Row>
          <p className="componentText">Provided ad-hoc IT support for office of > 100 personnel</p>
        </Row>
      </Container>
    );
  }
}
