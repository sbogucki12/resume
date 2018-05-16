import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../App.css';

export default class Secretarial extends Component {
	render() {
		return (
			<Container className="fontSmall">
				<Row>
					<h1 className="componentHeader">Administrative Assistant</h1>
				</Row>
				<Row>
					<Col className="adminCol">
						<Row>
							<p className="componentText">Coordinated travel arrangements</p>
						</Row>
						<Row>
							<p className="componentText">
								Reviewed and submitted payroll for office and division-level staff; up to 70 personnel
							</p>
						</Row>
						<Row>
							<p className="componentText">
								Provided customer service to non-government stakeholders and to high-level D.C.
								government officials who interacted with our office
							</p>
						</Row>
					</Col>
					<Col>
						<Row>
							<p className="componentText">
								Maintained calendar/schedule for multiple federal executives
							</p>
						</Row>
						<Row>
							<p className="componentText">
								Served as branch communications lead, maintained internal and external websites,
								published newsletters, and facilitated webinars
							</p>
						</Row>
						<Row>
							<p className="componentText">
								Served as Assistant SharePoint lead for the FAA's Engineering Division within the
								Aircraft Certification Service
							</p>
						</Row>
					</Col>
				</Row>
			</Container>
		);
	}
}
