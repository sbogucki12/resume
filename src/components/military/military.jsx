import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default class Military extends Component {
	render() {
		return (
			<Container>
				<Row>
					<p />
				</Row>
				<Col sm="1" />
				<Col sm="11">
					<Row className="MuiPaper-root-9 MuiPaper-elevation4-15 MuiAppBar-root-1 MuiAppBar-colorPrimary-7 componentHeader">
						U.S. Army (Active Duty)
					</Row>
					<Row>
						<b>Apr., 2002 - Oct., 2005</b>
					</Row>
					<Row>
						<List>
							<ListItem>
								<ListItemText>
									Promoted to rank of Sergeant in a team leader position as quickly as allowed by
									policy (24 months)
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									MOS: 13F,{' '}
									<a
										href="https://www.goarmy.com/careers-and-jobs/browse-career-and-job-categories/combat/fire-support-specialist.html"
										target="_blank"
										rel="noopener noreferrer"
									>
										Fire Support Specialist
									</a>{' '}
									("Forward Observer")
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>Two combat tours, Iraq</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									Participated in six-month{' '}
									<a
										href="https://en.wikipedia.org/wiki/Operation_Desert_Spring"
										target="_blank"
										rel="noreferrer noopener"
									>
										intrinsic action
									</a>{' '}
									in Kuwait to deter Iraqi aggression prior to OIF I
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									Six month tour, South Korea;{' '}
									<a
										href="https://en.wikipedia.org/wiki/Camp_Hovey"
										target="_blank"
										rel="noopener noreferrer"
									>
										vicinity of the DeMilitarized Zone ("DMZ")
									</a>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									Consistently achieved maximum score on physical fitness assessments
								</ListItemText>
							</ListItem>
						</List>
					</Row>
				</Col>
				<br />
				<Link to="/">
					<Row>
						<Button variant="raised" color="primary" className="d-block mx-auto">
							Home
						</Button>
					</Row>
				</Link>
				<br />
			</Container>
		);
	}
}
