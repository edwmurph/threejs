import * as THREE from 'three';

export default class {
  constructor(elementId) {
    this.width = 400;
    this.height = 400;
    this.elementId = elementId;
  }

  updateScene(mouse = {}) {
    if (mouse.x) {
      console.log(mouse);
    }
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  createThreeCamera() {
    const ratio = this.width / this.height;
    this.camera = new THREE.PerspectiveCamera(75, ratio, 0.1, 1000);
    this.camera.position.z = 5;
    this.camera.aspect = ratio;
    this.camera.updateProjectionMatrix();
  }

  createThreeRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(this.width, this.height);
    document.getElementById(this.elementId).appendChild(this.renderer.domElement);
  }

  createThreeScene() {
    this.scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
  }
}
