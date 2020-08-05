import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ResultModal from '../resultModal';
import AlertMessage from '../alertMessage';
import { Map as ImmutableMap } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';


const ModalViewer = (props) => (
  <Fragment>
    <ResultModal
      visible={props.resultModalVisible}
      onClose={() => props.closeModal('resultModal')}
      userWord ={props.userWord}
      response={props.response}
    />
    <AlertMessage
      visible={props.alertModalVisible}
      onClose={() => props.closeModal('alertMessage')}
    />
  </Fragment>
);

ModalViewer.propTypes = {
  resultModalVisible: PropTypes.bool.isRequired,
  alertModalVisible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func,
  openModal: PropTypes.func,
  userWord: PropTypes.string,
  response: ImmutablePropTypes.map,
};

ModalViewer.defaultProps = {
  word: ImmutableMap()
};


export default ModalViewer;
