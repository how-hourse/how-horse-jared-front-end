import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ScoreList from '../components/scores/ScoreList';

export default class Finish extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    newScore: PropTypes.func.isRequired,
    topTenScores: PropTypes.array.isRequired,
    place: PropTypes.number,
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.fetch();
    this.props.newScore({ user: this.props.match.params.player, score: this.props.match.params.score });
  }

  render() {

    const { place } = this.props;

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
          <p>You're {place} all time!</p>
        </section>
        <section>
          <header>Top Scores</header>
          <ScoreList scores={this.props.topTenScores} />
        </section>
      </div>
    );
  }
}


