import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import UpdatePerson from './UpdatePerson';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <UpdatePerson />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});