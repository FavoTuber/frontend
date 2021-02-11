import { shallow } from 'enzyme';
import React from 'react';
import { Video } from 'models/video';
import VideoCard from 'components/Card/Video';

describe('Check card component', () => {
  it('MovieCard shows "TEST" in a <Heading> tag', () => {
    const videos: Video = {
      id: 'TEST_ID',
      title: 'TEST',
      thumbnailUrl: 'https://google.com/',
    };

    const app = shallow(<VideoCard {...videos} />);
    expect(app.find('Heading').text()).toEqual('TEST');
  });

  it('MovieCard shows "ABC" in a <Heading> tag', () => {
    const videos: Video = {
      id: 'TEST_ID',
      title: 'ABC',
      thumbnailUrl: 'https://google.com/',
    };

    const app = shallow(<VideoCard {...videos} />);
    expect(app.find('Heading').text()).toEqual('ABC');
  });

  it('MovieCard do not shows "ABC" in a <Heading> tag', () => {
    const videos: Video = {
      id: 'TEST_ID',
      title: 'DEF',
      thumbnailUrl: 'https://google.com/',
    };

    const app = shallow(<VideoCard {...videos} />);
    expect(app.find('Heading').text()).not.toBe('ABC');
  });
});
