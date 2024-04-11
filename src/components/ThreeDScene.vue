<template>
  <div ref="renderer"></div>
</template>
   
<script>
  import * as THREE from 'three';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
  import Planete from './Planete.js';
  
  export default {
    name: 'ThreeDScene',
    data() {
        return {
          scene: null,
          camera: null,
          renderer: null,
          mesh: null,
        };
    },
    mounted() {
      this.initThree();
      this.createCube();
    },
    methods: {
      createCube(){
        const width = window.innerWidth, height = window.innerHeight;

        const camera = new THREE.PerspectiveCamera( 70, width / height, 1, 10000 );
        camera.position.z = 70;
        camera.position.x = 0;
        camera.position.y = 20;

        const scene = new THREE.Scene();


        const sunSphere = new THREE.SphereGeometry(7, 100 , 100);
        const sunTexture = new THREE.TextureLoader().load("sun.jpg");
        const material = new THREE.MeshBasicMaterial({ map: sunTexture });

        const mesh = new THREE.Mesh( sunSphere, material ); // 1 mesh = 1 forme + material

        const solarSystem = new THREE.Group();
        solarSystem.add( mesh );
        scene.add( solarSystem );

        const planete1 = new Planete(1.5, 10, "planete2.jpg"); 
        const sys1 = planete1.getMesh();
        let planete1System = new THREE.Group(sys1);
        planete1System.add(sys1);

        const planete2 = new Planete(2, 25, "planete3.jpg");
        const sys2 = planete2.getMesh();
        let planete2System = new THREE.Group();
        planete2System.add(sys2);

        const planete3 = new Planete(4, 36, "earth.jpg");
        const sys3 = planete3.getMesh();
      
        let planete3System = new THREE.Group();
        planete3System.add(sys3);

        solarSystem.add(planete1System, planete2System, planete3System);

        const renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( width, height );
        renderer.setAnimationLoop( animation );
        this.$refs.renderer.appendChild( renderer.domElement );

        const EARTH_YEAR = 1 * Math.PI * (1/30) * (1/30);

        function animation( time ) {
          mesh.rotation.y += 0.01;
          planete1System.rotation.y += EARTH_YEAR * 0.5;
          planete2System.rotation.y += EARTH_YEAR * 0.4;
          planete3System.rotation.y += EARTH_YEAR * 0.2;
          sys3.rotation.y += -0.001;
          sys1.rotation.y += -0.002;
          sys2.rotation.y += -0.003;
        
          renderer.render( scene, camera );
        }
      // let stats = Stats();
      // document.body.appendChild(stats.dom);
      }
      , 
      onKeyDown(event) {
        switch (event.key) {
          case 'ArrowUp':
            this.camera.position.y += 0.1;
            break;
          case 'ArrowDown':
            this.camera.position.y -= 0.1;
            break;
          case 'ArrowLeft':
            this.camera.position.x -= 0.1;
            break;
          case 'ArrowRight':
            this.camera.position.x += 0.1;
            break;
        }
      }
      ,
      initThree() {
        console.log("Three ",THREE)
        // Création de la scène
        this.scene = new THREE.Scene();
  
        // Création de la caméra
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 5;
        // Création du rendu
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        //this.renderer.setAnimationLoop(animation)
        this.$refs.renderer.appendChild(this.renderer.domElement);
        
        // Création d'un cube (représentant le personnage)
        const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        this.mesh = new THREE.Mesh(geometry, material);
        this.scene.add(this.mesh);
        
        // Fonction d'animation
        function animation( time, mesh ) {
          mesh.rotation.x = time / 2000;
          mesh.rotation.y = time / 1000;
          this.renderer.render( scene, camera );
        }
      },
      onkeydown(event){
        console.log((event))
      }
    },
  };
</script>

<style>
canvas{
  width: 500px;
  height: 567px;
  margin: auto;

}
</style>