<template>
  <div ref="renderer" style="max-width: 600px; max-height: 500px"></div>
 </template>
 
 <script>
 import * as THREE from 'three';
 import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
 
 export default {
  name: 'ThreeDScene',
  data() {
     return {
       scene: null,
       camera: null,
       renderer: null,
       beeModel: null, // Ajoutez une propriété pour le modèle de l'abeille
     };
  },
  mounted() {
     this.initThree();
     this.loadBeeModel(); // Chargez le modèle de l'abeille dans mounted
  },
  methods: {
     initThree() {
       this.scene = new THREE.Scene();
       this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
       this.camera.position.z = 5;
       this.renderer = new THREE.WebGLRenderer();
       this.renderer.setSize(window.innerWidth, window.innerHeight);
       this.$refs.renderer.appendChild(this.renderer.domElement);
     },
     loadBeeModel() {
       const loader = new GLTFLoader();
       loader.load('/3dModel/Bee4.glb', (gltf) => {
         this.beeModel = gltf.scene; // Utilisez this.beeModel pour accéder au modèle chargé
         this.beeModel.scale.set(0.5, 0.5, 0.5); // Ajustez la taille selon vos besoins
         this.scene.add(this.beeModel);
       });
     },
     animate() {
       requestAnimationFrame(this.animate);
       this.renderer.render(this.scene, this.camera);
     },
  },
 };
 </script>
 
 <style>
 canvas {
  width: 500px;
  height: 567px;
  margin: auto;
 }
 </style>
 