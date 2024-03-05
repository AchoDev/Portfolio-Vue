


import * as THREE from 'three'
// @ts-ignore
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const scene: THREE.Scene = new THREE.Scene()

let camera: THREE.PerspectiveCamera;
const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer()

function setSceneValues() {
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.rotation.order = 'YXZ'
  renderer.setSize(window.innerWidth, window.innerHeight)
}

setSceneValues()

scene.background = new THREE.Color('#000000') 

renderer.shadowMap.type = THREE.PCFSoftShadowMap
// renderer.shadowMap.enabled = true


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
    // console.log((xhr.loaded / xhr.total * 100) + '% loaded')
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

let walkMode = false;

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

  if(window.innerWidth < 750) {
    originalCamZ = 5
  }

  window.addEventListener("orientationchange", (e) => {
    document.getElementsByTagName("canvas").item(0)?.remove()
    setTimeout(() => {
      setSceneValues()
      document.getElementById("home")?.appendChild(renderer.domElement)
    }, 10)
  }, true);
  
  window.addEventListener("resize", (e) => {
    document.getElementsByTagName("canvas").item(0)?.remove()    
    setTimeout(() => {
      setSceneValues()
      document.getElementById("home")?.appendChild(renderer.domElement)
    }, 10)
  }, true);
  
  document.getElementById("home")?.appendChild(renderer.domElement)

  Array.from(document.getElementById("movement")!.children).forEach((button: HTMLButtonElement, index) => {
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

  document.getElementById("flight-button")?.addEventListener('click', () => {
    walkMode = true;
  })
  document.getElementById("no-flight-button")?.addEventListener('click', () => {
    walkMode = false;
  })
}

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

    if(!walkMode) {
      camera.position.x -= e.movementX * smallMoveAmount * 2
      camera.position.y += e.movementY * smallMoveAmount * 2
    }
    
    return
  } else if(mouseclicked) {
    camera.rotation.y += e.movementX * moveAmount * (walkMode ? 1.5 : 1) 
    camera.rotation.x += e.movementY * moveAmount * (walkMode ? 1.5 : 1)
  }
})

document.addEventListener('keypress', (e) => {
  if(e.key === "w") {
    moveDirection.x = 1
  }

  if(e.key === "s") {
    moveDirection.x = -1
  }

  if(e.key === "a") {
    moveDirection.y = -1
  }

  if(e.key === "d") {
    moveDirection.y = 1
  }

  if(e.key === "q") {
    moveDirection.z = -1
  }

  if(e.key === "e") {
    moveDirection.z = 1
  }
})

document.addEventListener('keyup', (e) => {
  switch(e.key) {
    case 'w':
      moveDirection.x = 0
      break
    case 's':
      moveDirection.x = 0
      break
    case 'a':
      moveDirection.y = 0
      break
    case 'd':
      moveDirection.y = 0
      break
    case 'q':
      moveDirection.z = 0
      break
    case 'e':
      moveDirection.z = 0
      break

  }
})

let moveDirection: THREE.Vector3 = new THREE.Vector3(0, 0, 0);

function translateForward(vector: THREE.Vector3, distance: number) {
  const x = vector.x * distance * Math.sin(camera.rotation.y) - vector.y * distance * Math.cos(camera.rotation.y)
  const y = vector.x * distance * Math.sin(camera.rotation.x) + vector.z * distance
  const z = vector.x * distance * Math.cos(camera.rotation.y) + vector.y * distance * Math.sin(camera.rotation.y)
  
  camera.position.x -= x
  camera.position.y += y
  camera.position.z -= z
}

function animate() {
	requestAnimationFrame( animate );

  
  translateForward(moveDirection, 0.1)
  

  // camera.rotation.x += moveAmount * 5
  // camera.rotation.z += moveAmount


  if((!mouseclicked || buttonPressed) && !walkMode) {
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

export const debugref = light