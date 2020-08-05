import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { playAgain } from '../../../redux/actions/word';
import { closeModal, openModal } from '../../../redux/actions/session';
import { selectVisible } from '../../../redux/selectors/session';
import { showResponse } from '../../../redux/selectors/word';


const mapStateToProps = (state) => ({
  resultModalVisible: selectVisible(state, 'resultModal'),
  alertModalVisible: selectVisible(state, 'alertMessage'),
  response: showResponse(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    closeModal,
    openModal,
    playAgain,

  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
