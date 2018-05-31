import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class Secretarial extends Component {
	render() {
		return (
			<Container>
				<Row>
					<p />
				</Row>
				<Col sm="1" />
				<Col sm="11">
					<Row className="MuiPaper-root-9 MuiPaper-elevation4-15 MuiAppBar-root-1 MuiAppBar-colorPrimary-7 componentHeader">
						Management Assistant - Federal Aviation Administration
					</Row>
					<Row>
						<b>Sept., 2010 - Mar., 2012</b>
					</Row>
					<Row>
						<List>
							<ListItem>
								<ListItemText>Coordinated travel arrangements</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									Reviewed and submitted payroll for office and division-level staff; up to 70
									personnel
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									Provided customer service to non-government stakeholders and to high-level D.C.
									government officials who interacted with our office
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									Maintained calendar/schedule for multiple federal executives
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									Served as branch communications lead, maintained internal and external websites,
									published newsletters, and facilitated webinars
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									Served as Assistant SharePoint lead for the FAA's Engineering Division within the
									Aircraft Certification Service
								</ListItemText>
							</ListItem>
						</List>
					</Row>
				</Col>
			</Container>
		);
	}
}
