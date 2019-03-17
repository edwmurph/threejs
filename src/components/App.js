import './App.css'

import React from 'react'
import ThreeJSComponent from './ThreeJSComponent'
import Sphere from '../threejs/sphere'
import ErrorBoundary from './ErrorBoundary'
import Header from './Header'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ErrorBoundary>
          <ThreeJSComponent ThreeJS={Sphere}/>
        </ErrorBoundary>
      </div>
    )
  }
}

export default App
