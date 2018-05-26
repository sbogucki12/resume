import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import '../../App.css';

export default class Policy extends Component {
	render() {
		return (
			<Container className="fontSmall">
				<Row>
					<h1 className="componentHeader">Policy Analyst</h1>
				</Row>
				<Row>
					<p className="componentText">
						With a partner, Developed, Wrote, Published Aircraft Certification's Service's implementation of
						the Federal Aviation Administration's new{' '}
						<a href="https://www.faa.gov/about/initiatives/cp/" target="_blank" rel="noopener noreferrer">
							<i>Compliance Philosophy</i>
						</a>; Developed/Deployed all associated online and in-person instructional courses for FAA
						personnel pertaining to new policy
					</p>
				</Row>
				<Row>
					<p className="componentText">
						Prepared material and conducted briefings for federal executives while working in our
						Washington, D.C. headquarters
					</p>
				</Row>
				<Row>
					<p className="componentText">
						Served as the Business Lead on a large Software Development Life Cycle (SDLC) project; building
						a web portal for all Aircraft Certification internal applications, per the{' '}
						<a
							href="http://money.cnn.com/news/newsfeeds/articles/prnewswire/PH85214.htm"
							target="_blank"
							rel="noreferrer noopener"
						>
							FAA NISC contract
						</a>
					</p>
				</Row>
			</Container>
		);
	}
}
