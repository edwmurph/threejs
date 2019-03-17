import * as THREE from 'three'
import ThreeJS from './threejs'

export default class Sphere extends ThreeJS {
  // call inside componentDidUpdate()
  renderNextFrame({ timestamp, mouse = {}, dimensions }) {
    if (mouse.x) {
      console.log(mouse)
    }
    this.mesh.rotation.x += 0.001
    this.mesh.rotation.y += 0.001

    return super.renderNextFrame(timestamp)
  }

  createThreeScene() {
    this.scene = new THREE.Scene()

    this.camera = new THREE.PerspectiveCamera(75, 0, 0.1, 1000)
    this.camera.position.z = 100

    // PARAMS: radius, horizontal, vertial
    const geometry = new THREE.SphereGeometry(40, 50, 30)
    const material = new THREE.MeshLambertMaterial({ color: 0xffffff, wireframe: true })

    this.mesh = new THREE.Mesh(geometry, material)
    this.scene.add(this.mesh)

    const spotLight = new THREE.SpotLight(0xffffff)
    spotLight.position.set(100, 10, 100)

    this.scene.add(spotLight)
  }
}
