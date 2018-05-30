import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../../App.css';

export default class Introduction extends Component {
	render() {
		return (
			<Container>
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
						<Row className="soundCloud">
							<iframe
								width="88%"
								height="20"
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
				<Row className="container">
					<Col sm="1" />
					<Col sm="11">
						<Row className="MuiPaper-root-9 MuiPaper-elevation4-15 MuiAppBar-root-1 MuiAppBar-colorPrimary-7 componentHeader">
							Cover Letter:
						</Row>
						<Row className="componentText">
							<p>Dear Hiring Manager,</p>
							<p>
								Thank you for considering me for your developer position and for reading this brief
								cover letter.
							</p>
							<p>
								I am a capable web developer, especially using .NET Core, including Web API and MVC
								(Razor view engine), to include associated technologies (Entity Framework, SQL Server,
								LINQ). For client-side applications, my preferred framework is ReactJS. I have deployed
								(admittedly simple) apps to Azure, Heroku, and AWS S3 buckets; some of which been “full
								stack” (Azure database, .NET controllers, AJAX data calls).
							</p>
							<p>
								This cover letter aims to set expectations. I am an ambitious developer in search of an
								opportunity, but I am admittedly short on experience and have some limitations; for
								example, regarding .NET, I am much more comfortable with Web API and Core MVC, and much
								less so with ASP.NET / Web Forms / User Controls, etc. I am willing and desirous to
								learn. I just want to establish a baseline of understanding about my current capability.
							</p>
							<p>
								For the right opportunity, I am willing to work very hard and for relatively cheap. If
								the fit feels right, I will begin work at $50,000/year salary and perhaps even lower, so
								long as I am provided the opportunity to learn, grow, contribute and work with
								like-minded intellectually curious folks.
							</p>
							<p>
								My professional goal is to learn as much about using computers and technologies to
								create innovative things and make life more efficient. I have no real notions about how
								that path should look; I prefer to allow career demands to guide my learning. My
								nonprofessional goal is simply to make enough income to live in vicinity of Silicon
								Beach (or, perhaps more ambitiously, Silicon Valley), so that I may feel like I am
								always in a stimulating learning environment.
							</p>
							<p>
								Thank you for considering my application and for taking the time to read this cover
								letter.
							</p>
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
	}
}
