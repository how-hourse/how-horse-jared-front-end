import React from 'react';
import { shallow } from 'enzyme';
import Score from './Score';

describe('Score component', () => {
  it('renders a Score', () => {
    const score = {
      name: 'terran',
      score: 200
    };
    const wrapper = shallow(<Score score={score} />);
    expect(wrapper).toMatchSnapshot();
  });
});
