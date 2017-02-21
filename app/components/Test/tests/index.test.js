import React from 'react';
import { shallow } from 'enzyme';

import Test from '../index';

describe('<Test />', () => {
  it('Expect to contain Test text', () => {
    const renderedComponent = shallow(
      <Test />
    );
    expect(renderedComponent.contains('Test')).toBe(true);
  });
});
