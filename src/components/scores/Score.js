import React from 'react';
import PropTypes from 'prop-types';

function Score({ score }) {
  const divStyle = {
    display: 'flex',
    justifyContent: 'space-between'
  };

  return (
    <div style={divStyle}>
      <p>{score.user}</p>
      <p>{score.score}</p>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.object.isRequired
};

export default Score;
