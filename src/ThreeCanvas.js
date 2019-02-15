import React from 'react';
import * as THREE from 'three';
import utils from './util/utils';

class ThreeCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.assets = {};
    this.mouse = {};
    this.ref = React.createRef();
  }

  createScene() {
    this.scene = new THREE.Scene();
  }

  createCamera() {
    this.camera = new THREE.PerspectiveCamera(75, null, 0.1, 1000);
    this.camera.position.z = 5;
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
  }

  createRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(this.width, this.height);
  }

  addCube() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.assets.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.assets.cube);
  }

  onMouseMove({ screenX, screenY }) {
    this.mouse.x = (screenX / this.width) * 2 - 1;
    this.mouse.y = -(screenY / this.height) * 2 + 1;
  }

  animate() {
    this.frameId = requestAnimationFrame(this.animate.bind(this));
    this.assets.cube.rotation.x += 0.01;
    this.assets.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }

  bindEvents() {
    // TODO if binding multiple events, the return signature needs to change
    const listener = this.onMouseMove.bind(this);
    this.ref.current.addEventListener('mousemove', listener);
    return this.ref.current.removeEventListener.bind({}, 'mousemove', listener);
  }

  componentDidMount() {
    this.width = this.ref.current.clientWidth;
    this.height = this.ref.current.clientHeight;
    utils.verifyEnv();
    this.cleanElement();

    this.createScene();
    this.createCamera();
    this.createRenderer();
    this.addCube();

    this.animate();
    this.ref.current.appendChild(this.renderer.domElement);
    this.unbindEvents = this.bindEvents();
  }

  cleanElement() {
    if (typeof this.unbindEvents === 'function') {
      this.unbindEvents();
    }
    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
    }
    if (this.ref.current) {
      while (this.ref.current.firstChild) {
        this.ref.current.removeChild(this.ref.current.firstChild);
      }
    }
  }

  componentWillUnmount() {
    // TODO verify this behavior when unmounting
    this.cleanElement();
  }

  render() {
    return (
      <div
        id="threejs"
        className="threejs"
        ref={this.ref}
      />
    );
  }
}

export default ThreeCanvas;
