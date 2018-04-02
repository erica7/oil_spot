import 'react-native';
import React from 'react';
import FormulaView from '../FormulaView';
import { StackNavigator } from 'react-navigation';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const globals = require('./../Globals.js');
const Item = globals.Item;
// const navigation = { navigate: jest.fn() };

//FIXME passing react-navigation navigate props 
const { navigate } = this.props.navigation;
navigate.navigation.state.params = {p: p, navTitle: "TEST"};

it('renders FormulaView correctly', () => {
  const tree = renderer.create(
    <FormulaView props={navigation}  />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

//<FormulaView navigation={navigation.state.params} p={flowrate} navTitle="test" navigation={navigation} />
