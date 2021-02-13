import { shallow } from 'enzyme';
import React from 'react';

import Logo from 'components/Header/Logo';

describe('Check site title in <Logo />', () => {
  it('<Logo /> shows "FavoTuber" in a <Heading> tag', () => {
    const app = shallow(<Logo />);
    expect(app.find('Heading').text()).toEqual('FavoTuber');
  });
});
