


import * as THREE from 'three'
// @ts-ignore
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const scene: THREE.Scene = new THREE.Scene()


const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
scene.background = new THREE.Color('#000000') 

const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer()
renderer.shadowMap.type = THREE.PCFSoftShadowMap
// renderer.shadowMap.enabled = true

renderer.setSize(window.innerWidth, window.innerHeight)

const geometry: THREE.BoxGeometry = new THREE.BoxGeometry(1, 1, 0.2)
const material: THREE.MeshLambertMaterial = new THREE.MeshLambertMaterial({color: 0x00ff00})
export const cube: THREE.Mesh = new THREE.Mesh(geometry, material)

cube.visible = false;

const loader = new GLTFLoader()

loader.load(
  '/room.glb',

  function(gltf) {
    gltf.scene.traverse( function( node ) {

      if ( node.isMesh ) { 
        node.castShadow = true;
        node.receiveShadow = true 
      }

  } );

    scene.add(gltf.scene)
  },

  function(xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded')
  },

  function(error) {
    console.log('error!!!!!')
    console.log(error)
  }
)

// lights
// '#9A5FC0'

const ambient = new THREE.AmbientLight(0xFFFFFF, 0.5)
const light = new THREE.SpotLight(0xffffd9, 100, 100, 250, 0.25)
light.shadow.bias = -0.0005
light.castShadow = true

const monitorlight1 = new THREE.RectAreaLight('#FFFFFF', 1, 10, 5)

const monitorlight2 = new THREE.RectAreaLight('#FFFFFF', 1, 10, 5)



function setInitialTransforms() {

  light.position.set(0, 5.67, -0.5)
  light.rotation.set(8, 3.1, 0)

  monitorlight1.position.set(0.3, 2.3, -1.8)
  monitorlight1.rotation.set(0, 3, 0)
  monitorlight1.scale.set(1.5, 1.1, 1)
  
  monitorlight2.position.set(-1.8, 2.4, -1.6)
  monitorlight2.rotation.set(0, 3.5, 0)
  monitorlight2.scale.set(2, 1.1, 0)
  
  camera.position.set(0, 3, 3)
}

function addObjectsToScene() {
  scene.add(light)
  // scene.add(ambient)
  scene.add(monitorlight1)
  scene.add(monitorlight2)

  scene.add(cube)
}

setInitialTransforms()
addObjectsToScene()

let originalCamX = 0;
let originalCamY = 3;
let originalCamZ = 3;

let mouseclicked: boolean = false
let buttonPressed: boolean = false

const buttonMovement = [
  [0, 3.5],
  [-1.5, 3],
  [0, 3],
  [1.5, 3],
  [0, 2],
  [0, 3],
  [0, 3],
]

const buttonMovementZ = [
  null,
  null,
  3,
  null,
  null,
  0.5,
  5
]

export function attachDOMElements() {

  document.getElementById("home").appendChild(renderer.domElement)

  Array.from(document.getElementById("movement").children).forEach((button: HTMLButtonElement, index) => {
    button.onmousedown = (e) => {
  
      buttonPressed = true
      if(buttonMovementZ[index] != null) {
        originalCamZ = buttonMovementZ[index]
        
        if(buttonMovementZ[index] !== 3) return
      }
  
      originalCamX = buttonMovement[index][0]
      originalCamY = buttonMovement[index][1]
  
    }
  
    button.onmouseup = (e) => {
      buttonPressed = false
    }
  })
}


function animate() {
	requestAnimationFrame( animate );

  if(!mouseclicked || buttonPressed) {
    camera.rotation.x = camera.rotation.x / 1.05
    camera.rotation.y = camera.rotation.y / 1.05
    // camera.position.x = camera.position.x / 1.05

    camera.position.x = (( camera.position.x - originalCamX ) / 1.05 ) + originalCamX
    camera.position.y = (( camera.position.y - originalCamY ) / 1.05 ) + originalCamY
    camera.position.z = (( camera.position.z - originalCamZ ) / 1.05 ) + originalCamZ
  }


	renderer.render( scene, camera );
}

animate();

window.addEventListener('mousedown', () => {
  mouseclicked = true
});
window.addEventListener('mouseup', () => {
  mouseclicked = false
});

// window.addEventListener('touchmove', function(e) {
  
//   e.preventDefault();
// }, {passive: false});

const moveAmount: number = 0.001
const smallMoveAmount: number = 0.0001

window.addEventListener('mousemove', (e) => {
  if(!mouseclicked) {

    

    camera.rotation.y -= e.movementX * smallMoveAmount
    camera.rotation.x -= e.movementY * smallMoveAmount * 2

    camera.position.x -= e.movementX * smallMoveAmount * 2
    camera.position.y += e.movementY * smallMoveAmount * 2
    
    return
  }
  
  camera.rotation.y += e.movementX * moveAmount
  camera.rotation.x += e.movementY * moveAmount
})

export const debugref = light