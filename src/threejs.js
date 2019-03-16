import * as THREE from 'three'

function verifyEnv() {
  try {
    const canvas = document.createElement('canvas')
    const meetsRequirements = !!(window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
    if (!meetsRequirements) {
      throw new Error()
    }
  } catch (e) {
    throw new Error('WebGL is not available on your system')
  }
}

export default class {

  constructor({ ref, newFrameHandler }) {
    this.newFrameHandler = newFrameHandler
    this.ref = ref
    this.camera = {};
  }

  /*
   * Methods to call from ThreeApp component
   */

  // call inside componentDidMount()
  afterMount() {
    verifyEnv()
    window.addEventListener('resize', this.onResize.bind(this))

    this.createThreeScene()
    this.renderer = new THREE.WebGLRenderer({ antialias: true })

    this.onResize()
    this.ref.current.appendChild(this.renderer.domElement)

    this.renderer.render(this.scene, this.camera)
    this.frameId = requestAnimationFrame(this.newFrameHandler)
  }

  // call inside componentDidUpdate()
  renderNextFrame({ mouse = {} }) {
    if (mouse.x) {
      console.log(mouse)
    }
    this.mesh.rotation.x += 0.001
    this.mesh.rotation.y += 0.001

    this.renderer.render(this.scene, this.camera)
    this.frameId = requestAnimationFrame(this.newFrameHandler)
  }

  // call inside componentWillUnmount()
  cleanup() {
    window.removeEventListener('resize', this.onResize)
    if (this.frameId) {
      cancelAnimationFrame(this.frameId)
    }
  }

  /*
   * ThreeJS scene
   */

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

  /*
   * Event handlers
   */

  onResize() {
    this.width = window.innerWidth
    this.height = window.innerHeight - 200
    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(this.width, this.height)
  }

}
