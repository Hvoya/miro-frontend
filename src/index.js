import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import withProviders from './components/providers';

const container = document.getElementById('dream-app');

const AppWithProviders = withProviders(App);
ReactDOM.render(<AppWithProviders />, container);
