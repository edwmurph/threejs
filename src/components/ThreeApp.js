import './ThreeApp.css'

import React from 'react'
import { connect } from 'react-redux'

import ThreeJS from '../threejs/ThreeJS'

class ThreeApp extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
    this.threejs = new ThreeJS(timestamp => this.props.update({ timestamp }), this.ref)
  }

  componentDidMount() {
    this.threejs.afterMount()
  }

  componentWillUpdate() {
    this.threejs.updateScene(this.props)
    this.threejs.renderNextFrame()
  }

  componentWillUnmount() {
    this.threejs.cleanup()
  }

  render() {
    return (
      <div
        id='three-display'
        className='three-display'
        onMouseDown={this.props.onMouseMove}
        ref={this.ref}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    timestamp: state.timestamp,
    mouse: state.mouse,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    update: timestamp => dispatch({
      type: 'TIMESTAMP',
      timestamp,
    }),
    onMouseMove: e => dispatch({
      type: 'MOUSE_DOWN',
      mouse: {
        x: e.screenX,
        y: e.screenY,
      },
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreeApp)
