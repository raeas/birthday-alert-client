import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import AddGift from './AddGift';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <AddGift />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});