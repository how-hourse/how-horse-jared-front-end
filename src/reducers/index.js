import { FETCH_TOP_SCORES } from '../actions/scoreActions';

const initialState = {
  topTenScores: [],
  player: ''
};

export default function reducer(state = initialState, action) {
  console.log('hi');
  switch(action.type) {
    case FETCH_TOP_SCORES:
      console.log(action);
      return { ...state, topTenScores: action.payload };
    default:
      return state;
  }
}
