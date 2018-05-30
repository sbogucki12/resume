import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import '../../App.css';

export default class Education extends Component {
	render() {
		return (
			<Container>
				<Row className="container">
					<Col sm="1" />
					<Col sm="11">
						<Row>
							<p />
						</Row>
						<Row className="MuiPaper-root-9 MuiPaper-elevation4-15 MuiAppBar-root-1 MuiAppBar-colorPrimary-7 componentHeader">
						</Row>
						<Row>
							<List>
								<ListItem>
									<ListItemText>Graduated Magna Cum Laude, USF's Honors College</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>Wrote, defended, published thesis on genocide prevention that identified a model of societal symptoms that tend to precipitate the emergence of mass genocide</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>Majors: International Studies and Religious Studies</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>Completed courses on Arabic and Hebrew (currently study Russian recreationally)</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>Tutored students in the USF Athletics Department on a variety of subjects; mostly English and some science</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>Fully initiated Brother, Sigma Phi Epsilon fraternity</ListItemText>
								</ListItem>
							</List>
						</Row>
						<br />
						<Row className="MuiPaper-root-9 MuiPaper-elevation4-15 MuiAppBar-root-1 MuiAppBar-colorPrimary-7 componentHeader">
						</Row>
						<Row>
							<List>
								<ListItem>
									<ListItemText>Petersburg, North Dakota</ListItemText>
								</ListItem>
							</List>
						</Row>
					</Col>
				</Row>
			</Container>
		);
	}
}
