import React from "react";
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import logo from './assets/icon.svg';

document.head.insertAdjacentHTML('beforeend', `<link rel="icon" href=${logo}>`);

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(<App/>)