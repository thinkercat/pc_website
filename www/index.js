import * as THREE from './three.js-master/build/three.module.js';
import {gsap} from './gsap-public/esm/index.js';
import {ScrollTrigger} from './gsap-public/esm/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger)
import {OBJLoader} from './three.js-master/examples/jsm/loaders/OBJLoader.js';
import {MTLLoader} from './three.js-master/examples/jsm/loaders/MTLLoader.js';
import {OrbitControls} from './three.js-master/examples/jsm/controls/OrbitControls.js';
import {loadObjects} from './loadObjects.js';

// INIT SCENE
var myCanvas = document.getElementById("3dCanvas");

var scene = new THREE.Scene();
scene.background = new THREE.Color(0xb4c5e4)

var camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer({antialias: true, canvas: myCanvas});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild( renderer.domElement );

// LOAD 3D OBJECTS
const {box, carte_graphique} = await loadObjects();
scene.add(box, carte_graphique)

// LIGHTENING
const light = new THREE.DirectionalLight(0xffffaa, 1);
light.position.x = 0.2;
light.position.y = 2;
light.position.z = 6;
scene.add(light);

const ambientlight = new THREE.AmbientLight( 0xffffff, 0.5); 
scene.add( ambientlight );

// SET CAMERA POSITION
camera.position.x = 0.2; //    |y
camera.position.y = 2;   //    |___x
camera.position.z = 6;   //  z/

camera.rotation.set(0,0,0); // x,y,z

// HELPER
scene.add(new THREE.AxesHelper());
scene.add(new THREE.PointLightHelper(light,1));
scene.add(new THREE.CameraHelper(camera));

// Controls
//const controls = new OrbitControls(camera, renderer.domElement);

//GSAP ANIMATION
let tl = gsap.timeline({
    scrollTrigger:{
        trigger: "#trigger01",
        start:'top top',
        scrub: true
    }
})
tl.to(camera.rotation,{
    scrollTrigger:{
        trigger:"#trigger02",
        start: 'top top',
        scrub: true,
        markers: true
    },
    y:1,
    duration: 3
})
tl.to(carte_graphique.position,{
    scrollTrigger:{
        trigger:"#trigger02",
        start: 'top top',
        scrub: true,
        markers: true
    },
    z:50,
    duration: 3
})




function animate() {
requestAnimationFrame( animate );

    light.position.set(camera.position.x,camera.position.y,camera.position.z);
    light.rotation.set(camera.rotation.x,camera.rotation.y,camera.rotation.z);
    //controls.update();
    renderer.render( scene, camera);
    //console.log(camera.position.x,',',camera.position.y,',',camera.position.z);
};
animate();
