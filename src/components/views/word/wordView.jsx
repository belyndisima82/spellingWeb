import React, { Component } from 'react';
import PropTypes from 'prop-types';
import matchPropTypes from '../../../proptypes/match';
import ModalViewer from '../../core/modalViewer';
import DnDWord from '../../core/dNd';
import { Button, Col, Row } from 'antd';
import { Map as ImmutableMap } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import './style.css';


class Word extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      word: '',
      color: false,
    };
  }

  componentDidMount() {
    this.props.requestWord();
  }


  submitAnswer = () => {
    this.props.requestResponse({
      word: this.state.word,
      id: this.props.word.get('id')
    });
    this.setState({
      isVisible: true,
    })
  }

  countLetters = (word, id) => {
    let counter = 0
    for (var i = 0 ; i < word.length; i += 1) {
      if (word[i] == id) {
        counter += 1;
      }
    }
    return counter
  }

  dropped = (e) => {
    var wordResponse = this.state.word;
    let wordResponseLetterCount = this.countLetters(wordResponse, e.dragData);
    let wordLetterCount = this.countLetters(this.props.word.get('destructured'), e.dragData);
    if (wordLetterCount > wordResponseLetterCount || wordResponse == '') {
      wordResponse += e.dragData;
      this.setState({
        word: wordResponse,
      })
      if (this.state.word.length == this.props.word.get('destructured').length) {
        this.submitAnswer();
        this.setState({
          repeat: true,
        });
      }
    } else {
      this.setState({
        isVisible: true,
      })
      this.props.openModal('alertMessage');
    }
  }

  playAgain = () => {
    this.setState({
      word: '',
      repeat: false
    });
    let newWord = {
      id: this.props.word.get('id'),
      pronunciationUrl: this.props.word.get('pronunciationUrl'),
      destructured: this.props.word.get('destructured').split('').sort(function(){return 0.5-Math.random()}).join(''),
    }
    this.props.playAgain(newWord);
  }

  requestNewWord = () => {
    this.setState({
      word: '',
      repeat: false,
    });
    this.props.requestWord();
  }

  render() {
    return (
      <div className="word-view-container landing">
        <div className="container padding-top-lg" align="middle">
          <Row>
            <Col span={18} offset={3}>
              <Row gutter={16}>
                <h1>Take your time and <span className="bold-text">Spell it!</span></h1>
                <h5>just dragg and drop letters, you pick the order.</h5>
              </Row>
            </Col>
          </Row>
          <DnDWord
            dropped={this.dropped}
            letters={this.state.word}
            word={this.props.word}
            onDragItem={this.onDragItem}
            color={this.state.color ? 'picked' : null}
          />
          <Row type="flex" align="middle" justify="center">
            {this.state.repeat ? 
            <Col md={4} align="middle">
              <Button type="primary" className="btn-green btn-lg btn-shadow full-width" onClick={this.playAgain}>Repeat</Button>
            </Col> : null
            }
            {this.state.repeat ?
            <Col md={4} offset={1} align="middle">
              <Button type="primary" className="btn-green btn-lg btn-shadow full-width" onClick={this.requestNewWord}>Next</Button>
            </Col> : null
            }
          </Row> 
          {this.state.isVisible ?
            <ModalViewer
              userWord={this.state.word}
            />
            : null}
        </div>
      </div>
    );
  }
}

Word.propTypes = {
  openModal: PropTypes.func.isRequired,
  requestWord: PropTypes.func.isRequired,
  word: ImmutablePropTypes.map,
  requestResponse: PropTypes.func.isRequired,
  history: matchPropTypes.isRequired,
  location: matchPropTypes.isRequired,
  playAgain: PropTypes.func.isRequired,
};

Word.defaultProps = {
  word: ImmutableMap(),
};

export default Word;
