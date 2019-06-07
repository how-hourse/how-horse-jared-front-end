import { FETCH_TOP_SCORES, NEW_SCORE } from '../actions/scoreActions';

const initialState = {
  topTenScores: [],
  newScore: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_TOP_SCORES:
      return { ...state, topTenScores: action.payload };
    case NEW_SCORE:
      return { ...state, newScore: action.payload };
    default:
      return state;
  }
}
