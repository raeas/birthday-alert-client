import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import GiftList from './GiftList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <GiftList />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});