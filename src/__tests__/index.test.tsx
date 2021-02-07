import { shallow } from 'enzyme';
import React from 'react';

import Home from '../pages/';

describe('Hello, world!', () => {
  it('App shows "Hello, world!" in a <h1> tag', () => {
    const app = shallow(<Home />);
    expect(app.find('h1').text()).toEqual('Hello, world!');
  });
});
