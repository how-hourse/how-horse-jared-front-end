import React from 'react';
import PropTypes from 'prop-types';
import Score from './Score';

function ScoreList({ scores }) {
  const liStyle = {
    padding: '0px'
  };
  const scoreArr = scores.map(score => {
    return (
      <li style={liStyle} key={`${score.name}-${score.score}`}>
        <Score score={score} />
      </li>
    );
  });

  const listStyles = {
    width: '50vw'
  };
  return <ol style={listStyles}>{scoreArr}</ol>;
}

ScoreList.propTypes = {
  scores: PropTypes.array.isRequired
};

export default ScoreList;
