import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Table } from 'reactstrap';
import Instagram from '../../content/images/social/ig-logo-email.png';
import LinkedIn from '../../content/images/social/linkedIn.png';
import Twitter from '../../content/images/social/twitter.png';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Email from '@material-ui/icons/Email';
import Print from '@material-ui/icons/Print';
import Map from '@material-ui/icons/Map';
import Phone from '@material-ui/icons/Phone';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Contact = () => {
	return (
		<Container>
			<Row>
				<Col sm="1" />
				<Col sm="11">
					<Table>
						<thead>
							<tr>
								<th>
									<a
										href="https://www.instagram.com/devbogoodski/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img src={Instagram} alt={Instagram} width="32px" />
									</a>
								</th>
								<th>
									<a
										href="https://www.linkedin.com/in/sbogucki12/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img src={LinkedIn} alt={LinkedIn} width="32px" className="d-block mx-auto" />
									</a>
								</th>
								<th>
									<a
										href="https://twitter.com/devbogoodski"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img src={Twitter} alt={Twitter} width="32px" className="float-right" />
									</a>
								</th>
							</tr>
						</thead>
					</Table>
				</Col>
			</Row>
			<Row>
				<Col sm="1" />
				<Col sm="11">
					<List>
						<a href="mailto:stevebogucki@gmail.com">
							<ListItem button>
								<ListItemIcon>
									<Email />
								</ListItemIcon>
								<ListItemText primary="stevebogucki12@gmail.com" />
							</ListItem>
						</a>
						<ListItem button>
							<ListItemIcon>
								<Phone />
							</ListItemIcon>
							<ListItemText primary="(813) 446-6704" />
						</ListItem>
						<ListItem button>
							<ListItemIcon>
								<Map />
							</ListItemIcon>
							<ListItemText primary="Long Beach, CA" />
						</ListItem>
						<a
							href="https://www.scribd.com/document/380609063/Bogucki-Resume-Cover-Letter-Full-Stack-Web-Dev"
							target="_blank"
							rel="noreferrer noopener"
						>
							<ListItem button>
								<ListItemIcon>
									<Print />
								</ListItemIcon>
								<ListItemText primary="Download Resume" />
							</ListItem>
						</a>
					</List>
				</Col>
			</Row>
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
};

export default Contact; 