import React, { Component } from 'react';
import { Navbar, Row, Col } from 'reactstrap';
import '../../../App.css';
import ToolbarFace from './toolbarFace';

export default class Toolbar extends Component {
	render() {
		return (
			<Row>
				<Col />
				<Col>
					<Navbar className="fixed-top">
						<Row>
							<Col className="toolbarLeftCol" sm="1" />

							<Col className="toolbarMidCol" sm="10">
								<ToolbarFace />
							</Col>
							<Col className="toolbarRightCol" sm="1" />
						</Row>
					</Navbar>
				</Col>
				<Col />
			</Row>
		);
	}
}
