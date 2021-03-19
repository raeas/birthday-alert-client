import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import DashboardTile from './DashboardTile';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <DashboardTile />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});