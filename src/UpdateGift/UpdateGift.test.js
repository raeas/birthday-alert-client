import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import UpdateGift from './UpdateGift';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <UpdateGift />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});