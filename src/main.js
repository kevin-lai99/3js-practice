import './style.css'

import * as THREE from 'three'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
