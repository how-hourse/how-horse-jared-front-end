import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Game extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired
  };

  state = {
    score: '0'
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {

    return (
      <>
      </>
    );
  }
}


