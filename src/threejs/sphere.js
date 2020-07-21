import * as THREE from 'three';
import { ThreeJSR } from '@edwmurph/threejsr';

export default class Sphere extends ThreeJSR {
  renderNextFrame({ timestamp, color }) {
    if (this.change < 100) {
      this.spotLight.position.set(0, 50, this.change);
      this.change += 0.5;
    }

    if (color && this.color !== color) {
      this.color = color;
      this.mesh.material.color.set(color);
    }

    this.mesh.rotation.x += 0.001;
    this.mesh.rotation.y += 0.001;

    return super.renderNextFrame(timestamp);
  }

  createThreeScene() {
    this.change = 0;
    this.scene = new THREE.Scene();

    const ambient = new THREE.AmbientLight(0xffffff, 0.1);
    this.scene.add(ambient);

    this.spotLight = new THREE.SpotLight(0xffffff);
    this.spotLight.position.set(20, 20, 60);
    this.spotLight.position.set(0, 50, 0);
    this.scene.add(this.spotLight);

    this.camera = new THREE.PerspectiveCamera(75, 0, 0.1, 1000);
    this.camera.position.set(0, 0, 100);

    const geometry = new THREE.SphereGeometry(40, 50, 30);
    const material = new THREE.MeshLambertMaterial({ color: 0xffffff, wireframe: true });

    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);
  }
}
