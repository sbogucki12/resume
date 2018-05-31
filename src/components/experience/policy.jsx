import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class Policy extends Component {
	render() {
		return (
			<Container>
				<Row>
					<p />
				</Row>
				<Col sm="1" />
				<Col sm="11">
					<Row className="MuiPaper-root-9 MuiPaper-elevation4-15 MuiAppBar-root-1 MuiAppBar-colorPrimary-7 componentHeader">
						Policy Analyst - Federal Aviation Administration
					</Row>
					<Row>
						<b className="roboto">Mar., 2012 - Jan., 2014</b>
					</Row>
					<Row>
						<List>
							<ListItem>
								<ListItemText>
									With a partner, developed, wrote, published Aircraft Certification's Service's
									implementation of the Federal Aviation Administration's new{' '}
									<a
										href="https://www.faa.gov/about/initiatives/cp/"
										target="_blank"
										rel="noreferrer noopener"
									>
										Compliance Philosophy
									</a>; Developed/deployed all associated online and in-person instructional courses
									for FAA personnel pertaining to new policy
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									Prepared material and conducted briefings for federal executives while working in
									our Washington, D.C. headquarters
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									Served as the Business Lead on a large Software Development Life Cycle (SDLC)
									project; building a web portal for all Aircraft Certification internal applications,
									per the{' '}
									<a
										href="http://money.cnn.com/news/newsfeeds/articles/prnewswire/PH85214.htm"
										target="_blank"
										rel="noreferrer noopener"
									>
										FAA NISC contract
									</a>
								</ListItemText>
							</ListItem>
						</List>
					</Row>
				</Col>
			</Container>
		);
	}
}
