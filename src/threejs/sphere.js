import * as THREE from 'three'
import { ThreeJSR } from 'threeJSR'

export default class Sphere extends ThreeJSR {
  renderNextFrame({ threejsr }) {
    if (threejsr.mouse) {
      console.log('inside sphere: ', threejsr.mouse)
    }
    this.mesh.rotation.x += 0.001
    this.mesh.rotation.y += 0.001

    return super.renderNextFrame(threejsr)
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
