import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MissionTable from '../components/pages/MissionTable';
import store from '../redux/configureStore';

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}><MissionTable /></Provider>,
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
