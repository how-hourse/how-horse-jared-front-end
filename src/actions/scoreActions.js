import { fetchTopTenScores } from '../services/scoreServices';
import { createAction } from 'promise-middleware-redux';

export const [
  fetchTopScores,
  FETCH_TOP_SCORES
] = createAction('FETCH_TOP_SCORES', fetchTopTenScores);


