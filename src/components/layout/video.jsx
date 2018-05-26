import React, { Component } from 'react';
import { Row } from 'reactstrap';
import '../../App.css';

export default class Video extends Component {
	render() {
		return (
			<div>
				<Row>
					<iframe
						width="100%"
						src="https://www.youtube.com/embed/WashCzz0Nrg"
						title="Resume Video - Steve Bogucki"
						frameBorder="0"
						allow="autoplay; encrypted-media"
						allowFullScreen
					/>
				</Row>
				<Row className="soundCloud">
					<iframe
						width="100%"
						height="20"
						scrolling="no"
						frameBorder="no"
						title="Resume Intro - Steve Bogucki"
						allow="autoplay"
						src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/444977403&color=%23ff5500&inverse=false&auto_play=false&show_user=true"
					/>
				</Row>
			</div>
		);
	}
}
