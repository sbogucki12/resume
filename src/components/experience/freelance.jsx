import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class Freelance extends Component {
	render() {
		return (
			<Container>
				<Row>
					<p />
				</Row>
				<Col sm="1" />
				<Col sm="11">
					<Row className="MuiPaper-root-9 MuiPaper-elevation4-15 MuiAppBar-root-1 MuiAppBar-colorPrimary-7 componentHeader">
						Web Developer
					</Row>
					<Row>
						<b className="roboto">June, 2017 - Present</b>
					</Row>
					<Row>
						<List>
							<ListItem>
								<ListItemText>
									Web developer / Content owner:{' '}
									<a
										href="https://maxresistance.herokuapp.com/"
										target="_blank"
										rel="noreferrer noopener"
									>
										http://maxresistanceblog.com
									</a>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									Graduated:{' '}
									<a href="https://redwoodcodeacademy.com/" target="_blank" rel="noreferrer noopener">
										Redwood Code Academy
									</a>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									My{' '}
									<a href="https://github.com/sbogucki12" target="_blank" rel="noreferrer noopener">
										gitHub
									</a>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									Currently enrolled: Harvard's{' '}
									<a
										href="https://www.edx.org/course/cs50s-introduction-computer-science-harvardx-cs50x"
										target="_blank"
										rel="noreferrer noopener"
									>
										CS50, Intro to Computer Science
									</a>, online
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									<a href="https://i.imgur.com/SCZTWbW.jpg" target="_blank" rel="noreferrer noopener">
										Courses
									</a>{' '}
									completed:
									<ul>
										<li>Mosh Hamedani's C# Beginner, Intermediate, Advanced courses</li>
										<li>Build a Real World App with ASP.NET Core and Angular 2</li>
										<li>The Complete ASP.NET MVC 5 Course</li>
										<li>Learn ASP.NET Web API 2 for Absolute Beginner</li>
										<li>Maximilian Schwarzmuller's Angular 6, The Complete Guide</li>
										<li>Learning Microsoft Transact - SQL</li>
										<li>Colt Steele's The Ultimate MySQL Bootcamp</li>
									</ul>
								</ListItemText>
							</ListItem>
						</List>
					</Row>
				</Col>
			</Container>
		);
	}
}
