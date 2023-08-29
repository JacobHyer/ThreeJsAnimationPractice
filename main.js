import * as Three from 'three';
import gsap from 'gsap';
import {OrbitControls} from './node_modules/three/examples/jsm/controls/OrbitControls';

// Canvas
const canvas = document.querySelector('.webgl')

// Camera Size 
const size = { 
  width: window.innerWidth,
  height: window.innerHeight
}

// Scene
const scene = new Three.Scene();

// Material 
const material = new Three.MeshBasicMaterial( { color:0x0060ff})

// Geometry
const geometry = new Three.BoxGeometry(1,1,1)

// Mesh
const mesh = new Three.Mesh(geometry, material)

scene.add(mesh)

// Camera
const camera = new Three.PerspectiveCamera(45, size.width/size.height)
camera.position.set(0, 12, 0)
camera.lookAt(mesh.position)
scene.add(camera)

// Axis Helper
const axisHelper = new Three.AxesHelper(3)
scene.add(axisHelper)

// Renderer
const renderer = new Three.WebGLRenderer( {canvas})
renderer.setSize(size.width, size.height)

renderer.render(scene, camera)  

// Clock

const clock = new Three.Clock()

const animate = () => {
// Update objects 
// mesh.rotation.y = clock.getElapsedTime()
// mesh.rotation.z = clock.getElapsedTime()
// mesh.rotation.x = clock.getElapsedTime()
mesh.position.x = Math.sin(clock.getElapsedTime()) * 2
mesh.position.z = Math.cos(clock.getElapsedTime()) * 4

// Update Camera
// camera.lookAt(mesh.position)

// Render
renderer.render(scene, camera)

// Call animate again on the next frame
window.requestAnimationFrame(animate)
}

animate()
