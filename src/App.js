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
import College from './components/education/college';

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
						<Col sm="3">
							<List>
								<ListItem>
									<Avatar>
										<ImageIcon />
									</Avatar>
									<ListItemText primary="Introduction" />
								</ListItem>
								<ListItem>
									<Avatar>
										<WorkIcon />
									</Avatar>
									<ListItemText primary="Contact" />
								</ListItem>
								<Link to="college">
									<ListItem>
										<Avatar>
											<BeachAccessIcon />
										</Avatar>

										<ListItemText primary="Education" />
									</ListItem>
								</Link>
								<ListItem>
									<Avatar>
										<BeachAccessIcon />
									</Avatar>
									<ListItemText primary="Experience" />
								</ListItem>
								<ListItem>
									<Avatar>
										<BeachAccessIcon />
									</Avatar>
									<ListItemText primary="Military" />
								</ListItem>
							</List>
						</Col>
						<Col sm="9">
							<Route path="/college" component={College} />
						</Col>
					</Row>
				</Container>
			</Router>
		);
	}
}
