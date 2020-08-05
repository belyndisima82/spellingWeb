import React, { Component } from 'react';
import matchPropTypes from '../../../proptypes/match';
import { Button, Col, Row } from 'antd';
import './style.css';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onStart = () => {
    this.props.history.push({ pathname: '/word'});
  };

  render() {
    return (
      <div className="home-view-container landing">
        <div className="container padding-top-lg" align="middle">
          <Row>
            <Col span={18} offset={3}>
              <Row gutter={16}>
                <h1>Welcome To <span className="bold-text">Spelling!</span></h1>
                <h5>You will be presented with a random word.</h5>
                <Col xs={24} sm={24} className="select-col">
                  <h3>Can you spell it correctly?</h3>
                </Col>
                <Col md={24} lg={24}>
                  <Button  type="submit" onClick={(e) => { this.onStart(e) }} className="ant-btn btn-green btn-shadow btn-lg ant-btn-primary btn-width">Start</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  history: matchPropTypes.isRequired,
};

Home.defaultProps = {
};

export default Home;