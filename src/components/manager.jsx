import React, { Component } from "react";
import { Container, Row } from "reactstrap";

export default class Manager extends Component {
  render() {
    return (
      <Container className="fontSmall">
        <Row>
          <h1 className="componentHeader">Manager</h1>
        </Row>
        <Row>
          <p className="componentText">
            Supervised 13 members of the Administrative and Technical Support
            Staff at the <a href="https://www.faa.gov/aircraft/air_cert/locate_office/aco/" target="_blank" rel="noopener noreferrer">Los Angeles Aircraft Certification Office</a> of the
            Federal Aviation Administration
          </p>
          <p className="componentText">
            Oversaw all facilities, office equipment; coordinated with building
            maintenance and ownership
          </p>
        </Row>
        <Row>
          <p className="componentText">
            Managed the aviation safety engineer <a href="https://www.faa.gov/other_visit/aviation_industry/designees_delegations/" target="_blank" rel="noopener noreferrer">designee program</a> for a
            multi-state region
          </p>
        </Row>
      </Container>
    );
  }
}
