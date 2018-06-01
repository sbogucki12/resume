import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import Button from '@material-ui/core/Button';
import Freelance from './freelance';
import Manager from './manager';
import Analyst from './analyst';
import Policy from './policy';
import Secretarial from './secretarial';
import { Link } from 'react-router-dom';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class Experience extends Component {
	constructor() {
		super();
		this.state = {
			experience: '',
		};
	}

	onFreelance() {
		this.setState({
			experience: 'freelance',
		});
	}

	onManager() {
		this.setState({
			experience: 'manager',
		});
	}

	onAnalyst() {
		this.setState({
			experience: 'analyst',
		});
	}

	onPolicy() {
		this.setState({
			experience: 'policy',
		});
	}

	onSecretarial() {
		this.setState({
			experience: 'secretarial',
		});
	}

	render() {
		return (
			<Container>
				<Row className="container">
					<Button variant="outlined" color="primary" onClick={() => this.onFreelance()}>
						Developer
					</Button>
					<Button variant="outlined" color="primary" onClick={() => this.onManager()}>
						Manager
					</Button>
					<Button variant="outlined" color="primary" onClick={() => this.onAnalyst()}>
						Data Analyst
					</Button>
					<Button variant="outlined" color="primary" onClick={() => this.onPolicy()}>
						Policy Analyst
					</Button>
					<Button variant="outlined" color="primary" onClick={() => this.onSecretarial()}>
						Management Assistant
					</Button>
				</Row>
				<br />
				<Row className="container">
					<ExpansionPanel>
						<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
							<Typography className="expansionText">Technologies With Which I'm Experienced:</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								<center>
									HTML, CSS, Bootstrap, ReactStrap, Material-UI, JavaScript, ReactJS, jQuery, C#, .NET
									Core (MVC / Web API), SQL Server (on Azure and Express), Entity Framework, LINQ,
									Identity Server, git, gitHub, Visual Studio, VSCode, Visual Studio Team Services,
									Jira, Microsoft Office (including Visio), Outlook, Azure (DocumentDB, Cosmos, Blob
									Storage), AWS S3, Heroku, Webpack, npm, Nuget, Postman, Agile Methodology, nodeJs
								</center>
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				</Row>
				<Row className="container">
					{(() => {
						switch (this.state.experience) {
							case 'freelance':
								return <Freelance />;
							case 'manager':
								return <Manager />;
							case 'analyst':
								return <Analyst />;
							case 'policy':
								return <Policy />;
							case 'secretarial':
								return <Secretarial />;
							default:
								return;
						}
					})()}
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
