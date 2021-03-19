import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import AddPerson from './AddPerson';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <AddPerson />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});