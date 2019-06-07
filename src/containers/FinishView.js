import { connect } from 'react-redux';
import Finish from './Finish';
import { getPlayer, getTopTenScores, getOverAllPlace } from '../selectors/playerSelectors';
import { fetchTopScores, newScore } from '../actions/scoreActions';


const mapStateToProps = state => ({
  topTenScores: getTopTenScores(state),
  player: getPlayer(state),
  place: getOverAllPlace(state),
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchTopScores());
  },
  newScore(score) {
    dispatch(newScore(score));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Finish);
