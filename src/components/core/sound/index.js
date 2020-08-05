import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import './style.css';

class Sound extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	playAudio = () => {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

	render() {
		return (
			<div>
				<Icon onClick={this.playAudio} type="sound" className="sound green-text" style={{ fontSize: '45px'}} />
				<audio className="audio-element" src={this.props.sound}></audio>
			</div>
		);
	}
}
Sound.propTypes = {
	sound: PropTypes.string.isRequired,
};

Sound.defaultProps = {
};

export default Sound;