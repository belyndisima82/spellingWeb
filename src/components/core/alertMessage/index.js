import React, { Component } from 'react';
import { Modal, Button, Row, Col } from 'antd';
import PropTypes from 'prop-types';

class AlertMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      visible,
      onClose,
    } = this.props;

    return (
      <Modal
        visible={visible}
        footer={null}
        onCancel={onClose}
        bodyStyle={{padding: 50}}
        zIndex={2000}
      >
        <Row type="flex" justify="center" align="middle" style={{padding: '16px'}}>
          <h3>Sorry!</h3>
        </Row>
        <Row>
          <Col md={24} align="middle" style={{padding: '16px'}}>
            <h2>You've already got this letter!</h2>
          </Col>
        </Row>
        <Row>
          <Col span={24} align="middle">
            <Button type="primary" className="btn-green btn-shadow btn-lg full-width" onClick={onClose}>Continue</Button>
          </Col>
        </Row>
      </Modal>
    );
  }
}

AlertMessage.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

AlertMessage.defaultProps = {
  visible: false,
};

export default (AlertMessage);
