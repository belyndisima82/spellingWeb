import React from 'react';
import PropTypes from 'prop-types';
import { Map as ImmutableMap } from 'immutable';
import { Col, Row } from 'antd';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Sound from '../sound';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

const dNdView = (props) => (
  <div>
    <Row>
      <Col span={3} offset={8} className="margin-top-md">
        <Sound
          sound={props.word.get('pronunciationUrl')}
        />
      </Col>
      <Col span={7}>
        {props.word.get('destructured') ? props.word.get('destructured').split('').map((letter) => (
          <DragDropContainer
            targetKey='word'
            dragData={letter}
            render={() => {
              return <h1>{letter}</h1>
            }}
          />
        )) : null}
      </Col>
    </Row>
    <Row className="margin-bottom-md">
      <Col span={15} className="full-width view-container">
        <DropTarget
          targetKey='word'
          onHit={props.dropped}
          dropData={{ word: props.word.get('destructured') }}
        >{props.letters ? props.letters : <p className="droptarget">'Drag your letters here!'</p>}
        </DropTarget>
      </Col>
    </Row>
  </div>
);

dNdView.propTypes = {
  word: ImmutablePropTypes.map,
  landedOn: PropTypes.func.isRequired,
  dropped: PropTypes.func.isRequired,
  playAgain: PropTypes.func.isRequired,
};

dNdView.defaultProps = {
  word: ImmutableMap()
};


export default dNdView;