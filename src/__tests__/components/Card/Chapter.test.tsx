import { shallow } from 'enzyme';
import React from 'react';

import ChapterCard from 'components/Card/Chapter';

describe('Check ChapterCard component', () => {
  it('ChapterCard shows "TEST" in a <Heading> tag', () => {
    const app = shallow(<ChapterCard title="TEST" time={1} />);
    expect(app.find('Heading').text()).toEqual('TEST');
  });

  it('ChapterCard shows "ABC" in a <Heading> tag', () => {
    const app = shallow(<ChapterCard title="ABC" time={1} />);
    expect(app.find('Heading').text()).toEqual('ABC');
  });

  it('ChapterCard shows "1:00:00" in a <Text> tag', () => {
    const app = shallow(<ChapterCard title="TEST" time={3600} />);
    expect(app.find('Text').text()).toEqual('1:00:00');
  });

  it('ChapterCard shows "1:14:04" in a <Text> tag', () => {
    const app = shallow(<ChapterCard title="TEST" time={4444} />);
    expect(app.find('Text').text()).toEqual('1:14:04');
  });

  it('ChapterCard shows "0:01:32" in a <Text> tag', () => {
    const app = shallow(<ChapterCard title="TEST" time={92} />);
    expect(app.find('Text').text()).toEqual('0:01:32');
  });
});
