import * as THREE from './three.js-master/build/three.module.js'
import {OBJLoader} from './three.js-master/examples/jsm/loaders/OBJLoader.js'

var myCanvas = document.getElementById("3dCanvas")

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer({antialias: true, canvas: myCanvas});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const loader = new OBJLoader()
loader.load('./assets/3d models/fan.obj', function(obj){
    console.log(obj)
    scene.add(obj)
},function(xhr){
    console.log(xhr.loaded/xhr.total * 100 + '% loaded')
},function(error){
    console.log('An error happen')
})

const light = new THREE.DirectionalLight(0xffffffff, 1)
light.position.set(2,2,5)
scene.add(light)
// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );


camera.position.z = 5;

var animate = function () {

requestAnimationFrame( animate );




    renderer.render( scene, camera );


};

animate();