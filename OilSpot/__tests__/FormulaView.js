import 'react-native';
import React from 'react';
import FormulaView from '../FormulaView';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders FormulaView correctly', () => {
  const tree = renderer.create(<FormulaView />).toJSON();
  expect(tree).toMatchSnapshot();
});