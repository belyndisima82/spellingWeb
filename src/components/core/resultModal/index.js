import React, { Component } from 'react';
import { Modal, Row, Col, Button } from 'antd';
import PropTypes from 'prop-types';
import { Map as ImmutableMap } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import './style.css';

class ResultModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  correctColor = () => {
    let colorObj= {};
    let originalWord = this.props.response.get('correctWord').split('');
    let letters = this.props.userWord;
    for (var i = 0; i < letters.length; i += 1) {
      if(letters[i] == originalWord[i]) {
        colorObj[i] = 'green-text';
      } else {
        colorObj[i] = 'red-text';
      }
    }
    return colorObj;
  }


  render() {
    const {
      visible,
      onClose,
      response,
      userWord,
    } = this.props;
    
    return (
      <Modal
        visible={visible}
        footer={null}
        className="choose-auth-modal"
        onCancel={onClose}
        style={{ 'white-space':'pre-wrap' }}
        bodyStyle={{padding: 0}}
        zIndex={2000}
      >
        <Row>
          <Col md={24} align="middle" className="corrections padding-top">
            {response.get('spelling') == 'correct' ? <p>Congratulations!</p>: <p>Try again!</p>}
          </Col>
        </Row>
        <Row>
          <Col md={24} align="middle" className="corrections">
             <p className="green-text">Correct spelling : {response.get('correctWord')}</p>
          </Col>
        </Row>
        <Row>
          <Col md={24} align="middle" className="corrections ">
            {response.get('spelling') == 'fail' ?
              userWord.split('').map((letter, index) => (
                <span className={this.correctColor()[index]}>{letter}</span>
              )) : null}
          </Col>
        </Row>
        <Row>
          <Col span={12} align="middle" className="bottom">
            <Button type="primary" className="btn-green btn-shadow btn-lg full-width" onClick={onClose}>Continue</Button>
          </Col>
        </Row>
      </Modal>
    );
  }
}

ResultModal.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  response: ImmutablePropTypes.map,
  userWord: PropTypes.string.isRequired,
};

ResultModal.defaultProps = {
  visible: false,
  response: ImmutableMap()
};


export default ResultModal;

