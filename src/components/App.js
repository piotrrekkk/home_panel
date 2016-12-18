import React, {PropTypes} from 'react';
import {Header} from './Header';
import Content from './Content';

import '../styles/styles.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
