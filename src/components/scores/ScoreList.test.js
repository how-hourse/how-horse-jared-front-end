import React from 'react';
import { shallow } from 'enzyme';
import ScoreList from './ScoreList';

describe('ScoreList component', () => {
  it('renders a ScoreList', () => {
    const scoreArr = [
      {
        name: 'taylor',
        score: 24
      },
      {
        name: 'taylor',
        score: 24
      },
      {
        name: 'taylor',
        score: 24
      },
      {
        name: 'taylor',
        score: 24
      }
    ];


    const wrapper = shallow(<ScoreList scores={scoreArr}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
