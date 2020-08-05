import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestResponse, requestWord, playAgain } from '../../../redux/actions/word';
import { openModal } from '../../../redux/actions/session';
import { showWord } from '../../../redux/selectors/word';

const mapStateToProps = (state) => ({
  word: showWord(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    openModal,
    requestResponse,
    requestWord,
    playAgain,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
