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
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	root: {
		flexGrow: 1
	},
	buttonWidth: {
		minWidth: 210,
	}
};

class Experience extends Component {
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
		const { classes } = this.props;
		return (
			<Container>
				<Grid container spacing={8}>
					
					<Grid item sm={4}>
						<Button variant="outlined" color="primary" className={classes.buttonWidth} onClick={() => this.onFreelance()}>
							Developer
						</Button>
					</Grid>
					<Grid item sm={4} />

					<Grid item sm={4} />
					<Grid item sm={4}>
						<Button variant="outlined" color="primary" className={classes.buttonWidth} onClick={() => this.onManager()}>
							Manager
						</Button>
					</Grid>
					<Grid item sm={4} />

					<Grid item sm={4} />
					<Grid item sm={4}>
						<Button variant="outlined" color="primary" className={classes.buttonWidth} onClick={() => this.onAnalyst()}>
							Data Analyst
						</Button>
					</Grid>
					<Grid item sm={4} />

					<Grid item sm={4} />
					<Grid item sm={4}>
						<Button variant="outlined" color="primary" className={classes.buttonWidth} onClick={() => this.onPolicy()}>
							Policy Analyst
						</Button>
					</Grid>
					<Grid item sm={4} />

					<Grid item sm={4} />
					<Grid item sm={4}>
						<Button variant="outlined" color="primary" className={classes.buttonWidth} onClick={() => this.onSecretarial()}>
							Management Assistant
						</Button>
					</Grid>
					<Grid item sm={4} />
				</Grid>

				<br />
				<Row className="container">
					<ExpansionPanel>
						<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
							<Typography className="expansionText">Technologies With Which I'm Experienced:</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography className="experienceText">
								HTML, CSS, Bootstrap, ReactStrap, Material-UI, JavaScript, ReactJS, jQuery, C#, .NET
								Core (MVC / Web API), SQL Server (on Azure and Express), Entity Framework, LINQ,
								Identity Server, git, gitHub, Visual Studio, VSCode, Visual Studio Team Services, Jira,
								Microsoft Office (including Visio), Outlook, Azure (DocumentDB, Cosmos, Blob Storage),
								AWS S3, Heroku, Webpack, npm, Nuget, Postman, Agile Methodology, nodeJs, OAUTH2.0 (via
								PassportJS)
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

export default withStyles(styles)(Experience);
