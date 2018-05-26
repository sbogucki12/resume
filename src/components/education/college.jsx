import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../App.css';

export default class College extends Component {
	render() {
		return (
			<Container className="fontSmall">
				<Row>
					<h1 className="componentHeader">University of South Florida</h1>
				</Row>
				<Row>
					<p className="componentText">
						Wrote, Defended, Published thesis on genocide prevention that identified a model of societal
						symptoms that tend to precipitate the emergence of mass genocide
					</p>
				</Row>
				<Row>
					<Col className="collegeCol">
						<Row>
							<p className="componentText">
								Graduated Magna Cum Laude, GPA 3.82 (of 4.0); alumnus USF's{' '}
								<a href="http://www.usf.edu/honors/" target="_blank" rel="noopener noreferrer">
									Honors College
								</a>
							</p>
						</Row>
						<Row>
							<p className="componentText">Majors: International Studies and Religious Studies</p>
						</Row>
						<Row>
							<p className="componentText">
								Completed courses on Arabic and Hebrew (currently study Russian recreationally)
							</p>
						</Row>
					</Col>
					<Col>
						<Row>
							<p className="componentText">
								Tutored students in the USF Athletics Department on a variety of subjects; mostly
								English and some science
							</p>
						</Row>
						<Row>
							<p className="componentText">
								Fully initiated Brother,{' '}
								<i>
									<a href="http://sigep.org/" target="_blank" rel="noreferrer noopener">
										Sigma Phi Epsilon
									</a>
								</i>{' '}
								fraternity
							</p>
						</Row>
					</Col>
				</Row>
			</Container>
		);
	}
}
