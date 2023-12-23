/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import HomeComponent from '../src/screens/home/HomeComponent';

it('renders correctly', () => {
  renderer.create(<HomeComponent />);
});
