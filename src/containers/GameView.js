import { connect } from 'react-redux';
import Game from './Game';
import { getPlayer, getTopTenScores } from '../selectors/playerSelectors';
import { fetchTopScores } from '../actions/scoreActions';


const mapStateToProps = state => ({
  topTenScores: getTopTenScores(state),
  player: getPlayer(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchTopScores());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
