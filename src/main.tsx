import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { setupWorker } from 'msw';
import { handlers } from '../mocks/handlers';

const worker = setupWorker(...handlers);

async function prepare() {
  if (import.meta.env.DEV) {
    return worker.start();
  }
}

prepare().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  )
});
