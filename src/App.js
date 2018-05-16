import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Freelance from './components/freelance';
import Analyst from './components/analyst';
import Manager from './components/manager';
import Policy from './components/policy';
import Secretarial from './components/secretarial';
import College from './components/college';
import Military from './components/military';
import Highschool from './components/highschool';
import Header from './components/header';
import Video from './components/video';
import Social from './components/social';
import Intro from './components/intro';

class App extends Component {
	render() {
		return (
			<Container>
				<Row>
					<p />
				</Row>
				<Row>
					<Header />
				</Row>
				<Row>
					<p />
				</Row>
				<Row>
					<Col>
						<p />
					</Col>
					<Col>
						<Video />
					</Col>
					<Col />
				</Row>
				<Row>
					<p />
				</Row>
				<Row>
					<Col />
					<Col>
						<Social />
					</Col>
					<Col />
				</Row>
				<Row>
					<p />
				</Row>
				<Row>
					<Col>
						<Intro />
					</Col>
				</Row>
				<Row>
					<p />
				</Row>
				<Row>
					<Col sm="2">
						<br />
						<p className="dateStyle">June, 2017 - Present:</p>
					</Col>
					<Col lg="10">
						<Freelance />
					</Col>
				</Row>
				<Row>
					<p />
				</Row>
				<Row>
					<Col sm="2">
						<br />
						<p className="dateStyle">Jan., 2016 - June, 2017:</p>
					</Col>
					<Col lg="10">
						<Manager />
					</Col>
				</Row>
				<Row>
					<p />
				</Row>
				<Row>
					<Col sm="2">
						<br />
						<p className="dateStyle">Jan., 2014 - Jan., 2016:</p>
					</Col>
					<Col lg="10">
						<Analyst />
					</Col>
				</Row>
				<Row>
					<p />
				</Row>
				<Row>
					<Col sm="2">
						<br />
						<p className="dateStyle">Mar., 2012 - Jan., 2014:</p>
					</Col>
					<Col lg="10">
						<Policy />
					</Col>
				</Row>
				<Row>
					<p />
				</Row>
				<Row>
					<Col sm="2">
						<p className="dateStyle">
							<br />Sept., 2010 - Mar., 2012:
						</p>
					</Col>
					<Col lg="10">
						<Secretarial />
					</Col>
				</Row>
				<Row>
					<p />
				</Row>
				<Row>
					<Col sm="2">
						<p className="dateStyle">
							<br />Jan., 2006 - May, 2009:
						</p>
					</Col>
					<Col lg="10">
						<College />
					</Col>
				</Row>
				<Row>
					<p />
				</Row>
				<Row>
					<Col sm="2">
						<p className="dateStyle">
							<br />Apr., 2002 - Oct., 2005:
						</p>
					</Col>
					<Col lg="10">
						<Military />
					</Col>
				</Row>
				<Row>
					<p />
				</Row>
				<Row>
					<Col sm="2">
						<p className="dateStyle">
							<br />April, 2002:
						</p>
					</Col>
					<Col lg="10">
						<Highschool />
					</Col>
				</Row>
				<Row>
					<p />
				</Row>
				<Row>
					<Col sm="1" />
					<Col lg="10">
						<center>
							<h2 className="techHeader">At least working knowledge of the following technologies:</h2>
						</center>
					</Col>
					<Col sm="1" />
				</Row>
				<Row>
					<Col sm="2" />
					<Col lg="8" className="fontSmall">
						<center>
							#HTML #CSS #BootStrap #JavaScript #ReactJs #ReactStrap #jQuery #VisualStudio #VSCode
							#EntityFramework #SQL #SqlServer #Azure #DocumentDb #Cosmos #BlobStorage #Heroku #CSharp
							#DotNet #LINQ #MVC #WebApi #Razor #CSHTML #MicrosoftAccess #MicrosoftWord #Outlook
							#AWSBuckets
						</center>
					</Col>
					<Col sm="2" />
				</Row>
				<Row>
					<p />
				</Row>
				<Row>
					<p />
				</Row>
			</Container>
		);
	}
}

export default App;
