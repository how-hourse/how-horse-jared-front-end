import React, { PureComponent } from 'react';

export default class Game extends PureComponent {

  state = {
    score: 0
  };

  render() {

    return (
      <>
        <section>Youre score is {this.state.score}</section>
      </>
    );
  }
}
