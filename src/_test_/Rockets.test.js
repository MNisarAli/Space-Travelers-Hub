import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rockets from '../components/pages/Rockets';

const RocketProvider = () => (
  <Provider store={store}>
    <Rockets />
  </Provider>
);

describe('Rockets component testing', () => {
  it('checks for accurate rendering of all rockets', () => {
    const allRockets = renderer.create(<RocketProvider />).toJSON();
    expect(allRockets).toMatchSnapshot();
  });

  it('verifies the presence of the rockets-container text in the DOM', () => {
    const { container } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(container.getElementsByClassName('rockets-container').length).toBe(1);
  });
});
