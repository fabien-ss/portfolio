import * as THREE from "three";

export default class Planete{
    constructor(radius, positionX, textureFile){
        this.radius = radius;
        this.positionX = positionX;
        this.textureFile = textureFile;        
    }

    getMesh(){
        if(this.mesh === undefined || this.mesh.length === null){
            const sphere = new THREE.SphereGeometry(this.radius);
            const texture = new THREE.TextureLoader().load(this.textureFile);
            const material = new THREE.MeshBasicMaterial({ map: texture});
            this.mesh = new THREE.Mesh(sphere, material);
            this.mesh.position.x += this.positionX;
        }
        return this.mesh;
    }
}