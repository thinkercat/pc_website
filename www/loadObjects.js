import * as THREE from './three.js-master/build/three.module.js';
import {GLTFLoader} from './three.js-master/examples/jsm/loaders/GLTFLoader.js';


const objectPath = './assets/3d models/';

async function loadObjects(){
    const loader = new GLTFLoader();

const [boxData,
        carte_graphiqueData,
        fanData,
        HarddriveData,
        motherboardData,
        powersupplyData,
        processeurData,
        ramData,
        ssdData] = await Promise.all([
        loader.loadAsync(objectPath + 'box.glb'),
        loader.loadAsync(objectPath + 'carte_graphique.glb'),
        loader.loadAsync(objectPath + 'fan.glb'),
        loader.loadAsync(objectPath + 'Harddrive.glb'),
        loader.loadAsync(objectPath + 'motherboard.glb'),
        loader.loadAsync(objectPath + 'powersupply.glb'),
        loader.loadAsync(objectPath + 'processeur.glb'),
        loader.loadAsync(objectPath + 'ram.glb'),
        loader.loadAsync(objectPath + 'ssd.glb')
    ]);

    function setupModel(data) {
        const model = data.scene.children[0];
        return model;

    }
    const box = setupModel(boxData)
    const carte_graphique = setupModel(carte_graphiqueData)
    const fan = setupModel(fanData)
    const Harddrive =setupModel( HarddriveData)
    const motherboard = setupModel(motherboardData)
    const powersupply = setupModel(powersupplyData)
    const processeur = setupModel(processeurData)
    const ram = setupModel(ramData)
    const ssd = setupModel(ssdData)

    return {
        box,
        carte_graphique,
        fan,
        Harddrive,
        motherboard,
        powersupply,
        processeur,
        ram,
        ssd
    }
}
export {loadObjects};