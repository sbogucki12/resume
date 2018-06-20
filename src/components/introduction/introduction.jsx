import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Introduction = (() => {
	return (
		<Container className="roboto">
			<Row className="container">
				<Col lg="1" />
				<Col lg="11">
					<Row className="MuiPaper-root-9 MuiPaper-elevation4-15 MuiAppBar-root-1 MuiAppBar-colorPrimary-7 componentHeader">
						Objective:
					</Row>
					<Row className="componentText">
						<p>
							My objective is to gain employment as a full-time, full-stack web developer. The ideal
							position will leverage both my technical skills and the leadership aptitude that I honed
							as a supervisor while serving in the U.S. military (active duty) and as a civil servant
							with the federal government. My primary expertise is building client-side applications
							using HTML, CSS (Bootstrap, ReactStrap), and ReactJs. I have working knowledge of
							server-side technologies of the Microsoft stack to include .NET Core (MVC/Razor, Web
							API), Entity Framework, LINQ, SQL Server, and Azure Cloud Storage.{' '}
						</p>
					</Row>
				</Col>
			</Row>
			<br />
			<Row className="container">
				<Col sm="1" />
				<Col sm="11">
					<Row>
						<iframe
							width="88%"
							src="https://www.youtube.com/embed/WashCzz0Nrg"
							title="Resume Video - Steve Bogucki"
							frameBorder="0"
							allow="autoplay; encrypted-media"
							allowFullScreen
						/>
					</Row>
					<br/>
					<Row className="soundCloud">
						<iframe
							width="88%"
							height="100%"
							scrolling="no"
							frameBorder="no"
							title="Resume Intro - Steve Bogucki"
							allow="autoplay"
							src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/444977403&color=%23ff5500&inverse=false&auto_play=false&show_user=true"
						/>
					</Row>
				</Col>
			</Row>
			<br />
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
})

export default Introduction; 