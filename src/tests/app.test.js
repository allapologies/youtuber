import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';
import SearchBar from '../components/SearchBar';
import VideoDetail from '../components/VideoDetail';
import VideoList from '../components/VideoList';

configure({ adapter: new Adapter() });

describe('App', () => {
  test('renders Searchbar, VideoDetail and VideoList components', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(SearchBar).length).toBe(1);
    expect(wrapper.find(VideoDetail).length).toBe(1);
    expect(wrapper.find(VideoList).length).toBe(1);
  });
});

