import './App.css'

import React from 'react'
import Sphere from '../threejs/sphere'
import Header from './Header'
import { SafeThreeJSRComponent } from 'threeJSR'

const events = {
  onMouseDown: function(e) {
    return { mouse: { x: e.screenX, y: e.screenY } }
  }
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SafeThreeJSRComponent ThreeJSR={Sphere} events={events} />
      </div>
    )
  }
}
