import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Button from '@material-ui/core/Button';
import '../../App.css';

export default class Experience extends Component {
	render() {
		return (
			<Container>
				<Row className="container">
				<Button variant="outlined" color="primary">Developer</Button>
				<Button variant="outlined" color="primary">Manager</Button>
				<Button variant="outlined" color="primary">Data Analyst</Button>
				<Button variant="outlined" color="primary">Policy Analyst</Button>
				<Button variant="outlined" color="primary">Management Assistant</Button>				
				</Row>
			</Container>
		);
	}
}