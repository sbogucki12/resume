import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import Button from '@material-ui/core/Button';
import Freelance from './freelance';
import Manager from './manager';
import Analyst from './analyst';
import Policy from './policy';
import Secretarial from './secretarial';
import { Link } from 'react-router-dom';

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
