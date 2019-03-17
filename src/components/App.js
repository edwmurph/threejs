import './App.css'

import React from 'react'
import SafeThreeJS from '../threejs/library/SafeThreeJS'
import Sphere from '../threejs/sphere'
import Header from './Header'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SafeThreeJS ThreeJS={Sphere}/>
      </div>
    )
  }
}
