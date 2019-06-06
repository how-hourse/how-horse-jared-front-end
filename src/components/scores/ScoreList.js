import React from 'react';
import PropTypes from 'prop-types';
import Score from './Score';

function ScoreList({ scores }) {
  const scoreArr = scores.map(score => {
    return (
      <li key={`${score.name}-${score.score}`}>
        <Score score={score} />
      </li>
    );
  });

  return <ul>{scoreArr}</ul>;
}

ScoreList.propTypes = {
  scores: PropTypes.array.isRequired
};

export default ScoreList;
