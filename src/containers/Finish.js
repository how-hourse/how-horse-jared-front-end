import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ScoreList from '../components/scores/ScoreList';

export default class Finish extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    topTenScores: PropTypes.array.isRequired
  };

  state = {
    score: '0',
    topScores: [],
    player: ''
  };

  componentDidMount() {
    this.props.fetch();
  }

  componentDidUpdate() {
    // eslint-disable-next-line react/prop-types
    this.setState({ topScores: this.props.topTenScores, player: this.props.match.params.player });
  }

  render() {
    const pageStyles = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',


      height: '100vh'
    };

    return (
      <div style={pageStyles}>
        <section>
          <header>You scored {this.props.match.params.score} horses!!!</header>
        </section>
        <section>
          <header>Top Scores</header>
          <ScoreList scores={this.state.topScores} />
        </section>
      </div>
    );
  }
}


