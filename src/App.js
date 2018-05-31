import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Home from '@material-ui/icons/Home';
import Email from '@material-ui/icons/Email';
import School from '@material-ui/icons/School';
import Work from '@material-ui/icons/Work';
import Star from '@material-ui/icons/Star';
import { Container, Col, Row } from 'reactstrap';
import Menu from './components/layout/toolbar/menu';
import Introduction from './components/introduction/introduction';
import Contact from './components/contact/contact';
import Education from './components/education/education';
import Experience from './components/experience/experience';
import Military from './components/military/military';

export default class App extends Component {
	render() {
		return (
			<Router>
				<Container>
					<Row>
						<Col sm="1" />
						<Col sm="10">
							<Menu />
						</Col>
						<Col sm="1" />
					</Row>
					<Row>
						<Col lg="2">
							<List>
								<Link to="introduction">
									<ListItem>
										<Avatar>
											<Home />
										</Avatar>
										<ListItemText primary="Introduction" />
									</ListItem>
								</Link>
								<Link to="contact">
									<ListItem>
										<Avatar>
											<Email />
										</Avatar>
										<ListItemText primary="Contact" />
									</ListItem>
								</Link>
								<Link to="education">
									<ListItem>
										<Avatar>
											<School />
										</Avatar>
										<ListItemText primary="Education" />
									</ListItem>
								</Link>
								<Link to="experience">
									<ListItem>
										<Avatar>
											<Work />
										</Avatar>
										<ListItemText primary="Experience" />
									</ListItem>
								</Link>
								<Link to="military">
									<ListItem>
										<Avatar>
											<Star />
										</Avatar>
										<ListItemText primary="Military" />
									</ListItem>
								</Link>
							</List>
						</Col>
						<Col lg="8">
							<Row><p/></Row>
							<Row>
								<Route path="/introduction" component={Introduction} />
								<Route path="/contact" component={Contact} />
								<Route path="/education" component={Education} />
								<Route path="/experience" component={Experience} />
								<Route path="/military" component={Military} />
							</Row>
						</Col>
						<Col lg="1"/>
					</Row>
				</Container>
			</Router>
		);
	}
}
