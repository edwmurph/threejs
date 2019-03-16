import './App.css'

import React from 'react'
import ThreeApp from './ThreeApp'
import ErrorBoundary from './ErrorBoundary'
import Header from './Header'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ErrorBoundary>
          <ThreeApp />
        </ErrorBoundary>
      </div>
    )
  }
}

export default App
