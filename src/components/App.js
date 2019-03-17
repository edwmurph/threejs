import './App.css'

import React from 'react'
import Sphere from '../threejs/sphere'
import Header from './Header'
import trr from 'trr'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <trr.SafeThreeJS ThreeJS={Sphere} />
      </div>
    )
  }
}
