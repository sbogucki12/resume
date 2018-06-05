import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { Row, Container } from 'reactstrap';
import Button from '@material-ui/core/Button';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200,
	},
	menu: {
		width: 200,
	},
	button: {
		marginLeft: '20%',
	},
});

class SendMessage extends Component {
	state = {
		name: '',
		email: '',
		message: '',
	};

	onSubmit() {
		console.log('form  worked!');
	}

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	};

	render() {
		const { classes } = this.props;

		return (
			<Container>
				<Row className="MuiPaper-root-9 MuiPaper-elevation4-15 MuiAppBar-root-1 MuiAppBar-colorPrimary-7 componentHeader">
					Send Me a Message
				</Row>
				<Row>
					<form className={classes.container}>
						<TextField
							id="name"
							label="Name"
							className={classes.textField}
							value={this.state.name}
							onChange={this.handleChange('name')}
							margin="normal"
						/>
					</form>
				</Row>
				<Row>
					<form className={classes.container}>
						<TextField
							id="email"
							label="Email"
							className={classes.textField}
							value={this.state.email}
							onChange={this.handleChange('email')}
							margin="normal"
						/>
					</form>
				</Row>
				<Row>
					<form className={classes.container}>
						<TextField
							id="message"
							label="Message"
							multiline
							rowsMax="20"
							value={this.state.message}
							className={classes.textField}
							onChange={this.handleChange('message')}
							margin="normal"
						/>
					</form>
				</Row>
                <br/>
				<Row>
					<Button variant="outlined" color="secondary" className={classes.button}>
						Submit
					</Button>
				</Row>
                <br/>
                <hr/>
			</Container>
		);
	}
}

export default withStyles(styles)(SendMessage);
