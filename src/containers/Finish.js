import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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

    return (
      <>
      </>
    );
  }
}


