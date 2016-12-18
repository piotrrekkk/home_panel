import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <MuiThemeProvider>
    <App/>
  </MuiThemeProvider>, document.getElementById('app'));
