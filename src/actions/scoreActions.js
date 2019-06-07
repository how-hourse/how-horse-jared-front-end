import { fetchTopTenScores, createNewScore } from '../services/scoreServices';
import { createAction } from 'promise-middleware-redux';

export const [
  fetchTopScores,
  FETCH_TOP_SCORES
] = createAction('FETCH_TOP_SCORES', fetchTopTenScores);

export const [
  newScore,
  NEW_SCORE
] = createAction('CREATE_NEW_SCORE', createNewScore);


