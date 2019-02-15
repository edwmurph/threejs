import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './ErrorBoundary';
import ThreeCanvas from './ThreeCanvas';
import '../scss/app.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>ThreeJS</h1>
        </div>
        <ErrorBoundary>
          <ThreeCanvas />
        </ErrorBoundary>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
