import * as THREE from './three.js-master/build/three.module.js';
import {OBJLoader} from './three.js-master/examples/jsm/loaders/OBJLoader.js';
import {MTLLoader} from './three.js-master/examples/jsm/loaders/MTLLoader.js';

const objectPath = './assets/3d models/';
const objects = ['box','carte_graphique','fan','Harddrive','motherboard','powersupply','processeur','ram','ssd'];
async function loadObjects(){
    const loader = new OBJLoader();

    const [boxData, carte_graphiqueData] = await Promise.all([
        loader.loadAsync('./assets/3d models/box.obj'),
        loader.loadAsync('./assets/3d models/carte_graphique.obj')
    ]);


    const box = boxData.children[0]
    const carte_graphique = carte_graphiqueData.children[0]
    return {
        box,
        carte_graphique
    }
}
export {loadObjects};