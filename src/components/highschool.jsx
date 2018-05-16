import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

export default class Highschool extends Component {
	render() {
		return (
			<Container className="fontSmall">
				<Row>
					<h1 className="componentHeader">Dakota Prairie High School</h1>
				</Row>
				<Row>
					<p className="componentText">Petersburg, North Dakota</p>
				</Row>
			</Container>
		);
	}
}
