import { shallow } from 'enzyme';
import React from 'react';

import Home from 'pages/';

describe('Top Page Test', () => {
  it('App shows "Hello, world!" in a <h1> tag', () => {
    const app = shallow(<Home />);
    console.log(app.find('a'));
    expect(app.find('a').at(0).prop('href')).toEqual('/video/sqrsVsjfBRY');
  });
});
