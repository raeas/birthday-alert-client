import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import PersonList from './PersonList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <PersonList />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});