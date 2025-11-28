import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MantineProvider, createTheme } from '@mantine/core';
import { themeConfig } from './utils/theme';

// Create Mantine theme
const theme = createTheme({
  primaryColor: themeConfig.primaryColor,
  defaultRadius: themeConfig.defaultRadius,
  fontFamily: themeConfig.fontFamily,
  headings: themeConfig.headings,
  spacing: themeConfig.spacing,
  breakpoints: themeConfig.breakpoints,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="light">
      <App />
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
