import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Education = () => {
	return (
		<Container>
			<Row className="container">
				<Col sm="1" />
				<Col sm="11">
					<Row>
						<p />
					</Row>
					<Row className="MuiPaper-root-9 MuiPaper-elevation4-15 MuiAppBar-root-1 MuiAppBar-colorPrimary-7 componentHeader">
						University of South Florida
					</Row>
					<Row>
						<b className="roboto">Jan., 2006 - May., 2009</b>
					</Row>
					<Row>
						<List>
							<ListItem>
								<ListItemText>
									Graduated Magna Cum Laude, USF's{' '}
									<a href="http://www.usf.edu/honors/" target="_blank" rel="noreferrer noopener">
										Honors College
									</a>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									Wrote, defended, published thesis on genocide prevention that identified a model of
									societal symptoms that tend to precipitate the emergence of mass genocide
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>Majors: International Studies and Religious Studies</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									Completed courses on Arabic and Hebrew (currently study Russian recreationally)
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									Tutored students in the USF Athletics Department on a variety of subjects; mostly
									English and some science
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									Fully initiated Brother,{' '}
									<a href="http://sigep.org/" target="_blank" rel="noreferrer noopener">
										Sigma Phi Epsilon
									</a>{' '}
									fraternity
								</ListItemText>
							</ListItem>
						</List>
					</Row>
					<br />
					<Row className="MuiPaper-root-9 MuiPaper-elevation4-15 MuiAppBar-root-1 MuiAppBar-colorPrimary-7 componentHeader">
						Dakota Prairie High School
					</Row>
					<Row>
						<b className="roboto">Graduated: April, 2002</b>
					</Row>
					<Row>
						<List>
							<ListItem>
								<ListItemText>Petersburg, North Dakota</ListItemText>
							</ListItem>
						</List>
					</Row>
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

export default Education;
