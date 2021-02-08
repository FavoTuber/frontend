import { shallow } from 'enzyme';
import React from 'react';

import MovieCard from 'components/Card/Movie';

describe('Check card component', () => {
  it('MovieCard shows "TEST" in a <Heading> tag', () => {
    const app = shallow(<MovieCard thumbnailUrl="" title="TEST" />);
    expect(app.find('Heading').text()).toEqual('TEST');
  });

  it('MovieCard shows "ABC" in a <Heading> tag', () => {
    const app = shallow(<MovieCard thumbnailUrl="" title="ABC" />);
    expect(app.find('Heading').text()).toEqual('ABC');
  });

  it('MovieCard do not shows "ABC" in a <Heading> tag', () => {
    const app = shallow(<MovieCard thumbnailUrl="" title="EFG" />);
    expect(app.find('Heading').text()).not.toBe('ABC');
  });
});
