import React from 'react';
import PropTypes from 'prop-types';
import Score from './Score';

function ScoreList({ scores }) {
  const liStyle = {
    padding: '0px'
  };
  const scoreArr = scores.map((score, i) => {
    return (
      <li style={liStyle} key={`${score.name}-${score.score}-${i}`}>
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
