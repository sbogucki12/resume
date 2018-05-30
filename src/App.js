import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
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
						<Col sm="2">
							<List>
								<Link to="introduction">
									<ListItem>
										<Avatar>
											<ImageIcon />
										</Avatar>
										<ListItemText primary="Introduction" />
									</ListItem>
								</Link>
								<Link to="contact">
									<ListItem>
										<Avatar>
											<WorkIcon />
										</Avatar>
										<ListItemText primary="Contact" />
									</ListItem>
								</Link>
								<Link to="education">
									<ListItem>
										<Avatar>
											<BeachAccessIcon />
										</Avatar>
										<ListItemText primary="Education" />
									</ListItem>
								</Link>
								<Link to="experience">
									<ListItem>
										<Avatar>
											<BeachAccessIcon />
										</Avatar>
										<ListItemText primary="Experience" />
									</ListItem>
								</Link>
								<Link to="military">
									<ListItem>
										<Avatar>
											<BeachAccessIcon />
										</Avatar>
										<ListItemText primary="Military" />
									</ListItem>
								</Link>
							</List>
						</Col>
						<Col sm="8">
							<Row><p/></Row>
							<Row>
								<Route path="/introduction" component={Introduction} />
								<Route path="/contact" component={Contact} />
								<Route path="/education" component={Education} />
								<Route path="/experience" component={Experience} />
								<Route path="/military" component={Military} />
							</Row>
						</Col>
						<Col sm="1"/>
					</Row>
				</Container>
			</Router>
		);
	}
}
