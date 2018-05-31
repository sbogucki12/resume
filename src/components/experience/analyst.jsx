import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import '../../App.css';

export default class Analyst extends Component {
	render() {
		return (
			<Container>
				<Row>
					<p />
				</Row>
				<Col sm="1" />
				<Col sm="11">
					<Row className="MuiPaper-root-9 MuiPaper-elevation4-15 MuiAppBar-root-1 MuiAppBar-colorPrimary-7 componentHeader">
						Data Analyst - Federal Aviation Administration
					</Row>
					<Row>
						<b>Jan., 2014 - Jan., 2016</b>
					</Row>
					<Row>
						<List>
							<ListItem>
								<ListItemText>
									Designed, Deployed, Maintained office "Work Tracking System" database that monitored
									all incoming/outgoing correspondence and all work assignments and deadlines
								</ListItemText>
							</ListItem>
						</List>
						<List>
							<ListItem>
								<ListItemText>
									Analyzed aviation safety data to provide insight and predictive modeling to office
									management
								</ListItemText>
							</ListItem>
						</List>
						<List>
							<ListItem>
								<ListItemText>
									Oversaw the office Quality Management System as the <a href="https://advisera.com/9001academy/knowledgebase/what-is-the-job-of-the-quality-management-representative/" target="_blank" rel="noreferrer noopener">ISO 9001 Quality Representative</a>
								</ListItemText>
							</ListItem>
						</List>
						<List>
							<ListItem>
								<ListItemText>Provided ad-hoc IT support for office of > 100 personnel</ListItemText>
							</ListItem>
						</List>
					</Row>
				</Col>
			</Container>
		);
	}
}
