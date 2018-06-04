import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Manager = (() => {
	return (
		<Container>
			<Row>
				<p />
			</Row>
			<Col sm="1" />
			<Col sm="11">
				<Row className="MuiPaper-root-9 MuiPaper-elevation4-15 MuiAppBar-root-1 MuiAppBar-colorPrimary-7 componentHeader">
					Manager - Federal Aviation Administration
				</Row>
				<Row>
					<b className="roboto">Jan., 2016 - June, 2017</b>
				</Row>
				<Row>
					<List>
						<ListItem>
							<ListItemText>
								Supervised 13 members of the Administrative and Technical Support Staff at the Los
								Angeles <a href="https://www.faa.gov/aircraft/air_cert/locate_office/aco/" target="_blank" rel="noreferrer noopener">Aircraft Certification Office</a> of the Federal Aviation Administration
							</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemText>
								Oversaw all facilities, office equipment; coordinated with building maintenance and
								ownership
							</ListItemText>
						</ListItem>
						<ListItem>
							<ListItemText>Managed the aviation safety engineer <a href="https://www.faa.gov/other_visit/aviation_industry/designees_delegations/" target="_blank" rel="noopener noreferrer">designee program</a> for a multi-state region</ListItemText>
						</ListItem>
					</List>
				</Row>
			</Col>
		</Container>
	);
})
		
export default Manager;
