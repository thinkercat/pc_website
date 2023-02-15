import * as THREE from './three.js-master/build/three.module.js'
import {OBJLoader} from './three.js-master/examples/jsm/loaders/OBJLoader.js'

// INIT SCENE
var myCanvas = document.getElementById("3dCanvas");

var scene = new THREE.Scene();
scene.add(new THREE.AxesHelper());

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer({antialias: true, canvas: myCanvas});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild( renderer.domElement );

// LOAD 3D OBJECTS
const loader = new OBJLoader()
loader.load('./assets/3d models/box.obj', function(obj){
    console.log(obj);
    scene.add(obj);
},function(xhr){
    console.log(xhr.loaded/xhr.total * 100 + '% loaded')
},function(error){
    console.log('An error happen')
})
loader.load('./assets/3d models/fan.obj', function(obj){
    console.log(obj);
    scene.add(obj);
},function(xhr){
    console.log(xhr.loaded/xhr.total * 100 + '% loaded')
},function(error){
    console.log('An error happen')
})
loader.load('./assets/3d models/motherboard.obj', function(obj){
    console.log(obj);
    scene.add(obj);
},function(xhr){
    console.log(xhr.loaded/xhr.total * 100 + '% loaded')
},function(error){
    console.log('An error happen')
})
loader.load('./assets/3d models/carte_graphique.obj', function(obj){
    console.log(obj);
    scene.add(obj);
},function(xhr){
    console.log(xhr.loaded/xhr.total * 100 + '% loaded')
},function(error){
    console.log('An error happen')
})
loader.load('./assets/3d models/Hardrive.obj', function(obj){
    console.log(obj);
    scene.add(obj);
},function(xhr){
    console.log(xhr.loaded/xhr.total * 100 + '% loaded')
},function(error){
    console.log('An error happen')
})
loader.load('./assets/3d models/ssd.obj', function(obj){
    console.log(obj);
    scene.add(obj);
},function(xhr){
    console.log(xhr.loaded/xhr.total * 100 + '% loaded')
},function(error){
    console.log('An error happen')
})
loader.load('./assets/3d models/processeur.obj', function(obj){
    console.log(obj);
    scene.add(obj);
},function(xhr){
    console.log(xhr.loaded/xhr.total * 100 + '% loaded')
},function(error){
    console.log('An error happen')
})
loader.load('./assets/3d models/powersupply.obj', function(obj){
    console.log(obj);
    scene.add(obj);
},function(xhr){
    console.log(xhr.loaded/xhr.total * 100 + '% loaded')
},function(error){
    console.log('An error happen')
})
loader.load('./assets/3d models/ram.obj', function(obj){
    console.log(obj);
    scene.add(obj);
},function(xhr){
    console.log(xhr.loaded/xhr.total * 100 + '% loaded')
},function(error){
    console.log('An error happen')
})

// LIGHTENING
const light = new THREE.DirectionalLight(0xffffffff, 0.5);
light.position.x = -2;
light.position.y = 0;
light.position.z = 5;
scene.add(light);


// SET CAMERA POSITION
camera.position.x = 2; //    |y
camera.position.y = 1; //    |___x
camera.position.z = 7; //  z/

var animate = function () {
requestAnimationFrame( animate );


    renderer.render( scene, camera);
};
animate();