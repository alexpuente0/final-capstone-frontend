import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import App from '../App';
import setupStore from './setupStore';

describe('Test the App.test components', () => {
  it('renders the App correctly', () => {
    const store = setupStore();
    const app = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
    );
    expect(app).toMatchSnapshot();
  });

  it('shows the HomePage when clicking the navbar link', () => {
    const store = setupStore(false);
    const { container } = render(
      <Provider store={store}>
        <Router>
          <App url="/" />
        </Router>
      </Provider>,
    );
    fireEvent.click(screen.getByText('My Reservations'));
    fireEvent.click(screen.getByText('Home'));
    expect(
      container.getElementsByClassName('react-multi-carousel-list'),
    ).toHaveLength(1);
  });

  it('shows the ReservationsPage when clicking the navbar link', () => {
    const store = setupStore(false);
    render(
      <Provider store={store}>
        <Router>
          <App url="/" />
        </Router>
      </Provider>,
    );
    fireEvent.click(screen.getByText('My Reservations'));
    expect(screen.getByRole('heading')).toHaveTextContent('Reservations Page');
  });

  it('shows the Add Reservations when clicking the navbar link', () => {
    const store = setupStore(false);
    render(
      <Provider store={store}>
        <Router>
          <App url="/" />
        </Router>
      </Provider>,
    );
    fireEvent.click(screen.getByText('Reserve Green'));
    expect(screen.getByRole('heading')).toHaveTextContent('Add Reservation');
  });

  it('shows the New Item when clicking the navbar link', () => {
    const store = setupStore(false);
    const { container } = render(
      <Provider store={store}>
        <Router>
          <App url="/" />
        </Router>
      </Provider>,
    );
    fireEvent.click(screen.getByText('New Green'));
    expect(
      container.getElementsByClassName('MuiFormControl-root'),
    ).toHaveLength(1);
  });

  it('shows the Delete Items when clicking the navbar link', () => {
    const store = setupStore(false);
    render(
      <Provider store={store}>
        <Router>
          <App url="/" />
        </Router>
      </Provider>,
    );
    fireEvent.click(screen.getByText('Delete Green'));
    expect(screen.getByRole('heading')).toHaveTextContent('Delete a Green');
  });

  // it('shows the Item detail page when clicking the item in carousel', async () => {
  //   const store = setupStore(false);
  //   const { container } = render(
  //     <Provider store={store}>
  //       <Router>
  //         <App url="/" />
  //       </Router>
  //     </Provider>,
  //   );
  //   fireEvent.click(screen.getByText('Home'));
  //   // const carousel = container.getElementsByClassName('react-multi-carousel-track').item(0);
  //   const carousel = container.querySelector('.react-multi-carousel-track');
  //   // console.log(carousel);
  //   const list = carousel.querySelector('.react-multi-carousel-item');
  //   console.log('zzzzzzz', list);
  //   // eslint-disable-next-line no-restricted-syntax
  //   for (const c of list) {
  //     // console.log('yyyyy', c);
  //     // const b = c.querySelector('button');
  //     console.log('yyyyy', c.textContent);
  //   }
  //   // fireEvent.click(list[1]);
  //   // console.log('LIST', list[1]);
  //   // list[0].click();
  //   // console.log('CCC', carousel[0]);
  //   // (carousel[0]).click;
  //   // console.log('sssss', await screen.findByRole('button'));
  //   // eslint-disable-next-line no-restricted-syntax
  //   // console.log('yyyyyyyyyyy', carousel.getElementsByClassName('MuiCardMedia-root'));

  //   // console.log('xxxxxxxxxxxxx', screen.getByText('BMW i4'));
  //   // fireEvent.click(screen.getByText('BMW i4'));

  //   expect(screen.getByRole('heading')).toHaveTextContent('BMW i4');
  // });
});
