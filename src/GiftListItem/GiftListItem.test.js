import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import GiftListItem from './GiftListItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <GiftListItem />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});