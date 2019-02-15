import React from 'react';
import RenderableError from './util/renderableError';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {
      error: error instanceof RenderableError ? error : new RenderableError(),
    };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.error(error, info);
  }

  render() {
    if (this.state.error) {
      return (<h2>{this.state.error.renderMsg}</h2>);
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
