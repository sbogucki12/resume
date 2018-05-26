import React, { Component } from 'react';
import { Container, Row, Col, Button, ButtonGroup } from 'reactstrap';
import '../../../App.css';

export default class ToolbarFace extends Component {
	render() {
		return (
			<Row>
                <Col sm="4"/>
                <Col>
				<ButtonGroup size="sm">
					<Button>Objective</Button>
					<Button>Education</Button>
					<Button>Experience</Button>
					<Button>Military</Button>
				</ButtonGroup>
                </Col>
			</Row>
		);
	}
}
