import * as THREE from 'three'

export default class {
  constructor(newFrameHandler, ref) {
    this.newFrameHandler = newFrameHandler
    this.ref = ref
  }

  verifyEnv() {
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

  afterMount() {
    this.verifyEnv()
    window.addEventListener('resize', this.onResize.bind(this))

    this.setDimensions()
    this.createThreeScene()
    this.createThreeRenderer()

    this.renderNextFrame()
  }

  updateScene({ mouse = {} }) {
    if (mouse.x) {
      console.log(mouse)
    }
    this.mesh.rotation.x += 0.001
    this.mesh.rotation.y += 0.001
  }

  createThreeRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setSize(this.width, this.height)
    this.ref.current.appendChild(this.renderer.domElement)
  }

  createThreeScene() {
    const ratio = this.width / this.height
    this.camera = new THREE.PerspectiveCamera(75, ratio, 0.1, 1000)

    this.camera.position.z = 100
    this.camera.aspect = ratio
    this.camera.updateProjectionMatrix()

    this.scene = new THREE.Scene()

    // PARAMS: radius, horizontal, vertial
    const geometry = new THREE.SphereGeometry(40, 50, 30)
    const material = new THREE.MeshLambertMaterial({ color: 0xffffff, wireframe: true })

    this.mesh = new THREE.Mesh(geometry, material)
    this.scene.add(this.mesh)

    const spotLight = new THREE.SpotLight(0xffffff)
    spotLight.position.set(100, 10, 100)

    this.scene.add(spotLight)
  }

  setDimensions() {
    this.width = window.innerWidth
    this.height = window.innerHeight - 200
  }

  onResize() {
    this.setDimensions()
    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(this.width, this.height)
  }

  renderNextFrame() {
    this.renderer.render(this.scene, this.camera)
    this.frameId = requestAnimationFrame(this.newFrameHandler)
  }

  cleanup() {
    window.removeEventListener('resize', this.onResize)
    if (this.frameId) {
      cancelAnimationFrame(this.frameId)
    }
  }
}
