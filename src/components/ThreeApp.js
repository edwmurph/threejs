import './ThreeApp.css';

import React from 'react';
import { connect } from 'react-redux';

import ThreeJS from '../threejs/ThreeJS';
import utils from '../util/utils';

class ThreeApp extends React.Component {
  constructor(props) {
    super(props);
    this.elementId = 'three-display';
    this.threejs = new ThreeJS(this.elementId);
  }

  renderNextFrame() {
    this.threejs.render();
    this.frameId = requestAnimationFrame(timestamp => this.props.update(timestamp));
  }

  componentDidMount() {
    utils.verifyEnv();

    this.threejs.createThreeScene();
    this.threejs.createThreeCamera();
    this.threejs.createThreeRenderer();

    this.renderNextFrame();
  }

  componentWillUpdate() {
    this.threejs.updateScene(this.props.mouse);
    this.renderNextFrame();
  }

  componentWillUnmount() {
    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
    }
  }

  render() {
    return (
      <div
        id={this.elementId}
        className='three-display'
        onMouseDown={this.props.onMouseMove}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    timestamp: state.timestamp,
    mouse: state.mouse,
  };
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreeApp);
