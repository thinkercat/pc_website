import * as THREE from './three.js-master/build/three.module.js'
import {OBJLoader} from './three.js-master/examples/jsm/loaders/OBJLoader.js'
import {MTLLoader} from './three.js-master/examples/jsm/loaders/MTLLoader.js'
import {OrbitControls} from './three.js-master/examples/jsm/controls/OrbitControls.js'
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


const objectPath = './assets/3d models/'
const objects = ['box','carte_graphique','fan','Harddrive','motherboard','powersupply','processeur','ram','ssd'];
const objectMeshes = []

for(let i = 0; i < objects.length; i++){
    const loader = new OBJLoader();
    const mtlloader = new MTLLoader();
    mtlloader.load(objectPath + objects[i] + '.mtl',function(material){
        loader.setMaterials(material)
        loader.load(objectPath + objects[i] + '.obj', function(obj){
            console.log(obj);
            scene.add(obj);
                
        },function(xhr){
            console.log(objects[i]+' chargé à '+xhr.loaded/xhr.total * 100 + '%')
        
        },function(error){
            console.log('Erreur de chargement du obj', error)
        })
    },function(xhr){
        console.log('material '+objects[i]+' chargé à '+xhr.loaded/xhr.total * 100 + '%')
    
    },function(error){
        console.log('Erreur de chargement du mtl', error)
    })

}

// LIGHTENING
const light = new THREE.DirectionalLight(0xffffffff, 0.5);
light.position.x = -2;
light.position.y = 0;
light.position.z = 5;
scene.add(light);


// SET CAMERA POSITION
camera.position.x = 2; //    |y
camera.position.y = 2; //    |___x
camera.position.z = 7; //  z/

const controls = new OrbitControls(camera, renderer.domElement);

var animate = function () {
requestAnimationFrame( animate );

    controls.update();
    renderer.render( scene, camera);
};
animate();