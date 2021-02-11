import { shallow } from 'enzyme';
import React from 'react';

import HeaderNav from 'components/Header/Navigation';

describe('Check site title in HeaderNav', () => {
  it('HeaderNav shows "FavoTuber" in a <Heading> tag', () => {
    const app = shallow(<HeaderNav />);
    expect(app.find('Heading').text()).toEqual('FavoTuber');
  });
});
