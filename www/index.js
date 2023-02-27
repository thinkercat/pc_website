// IMPORTS
import {gsap} from './gsap-public/esm/index.js';
import {ScrollTrigger} from './gsap-public/esm/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger)

const loader = document.getElementById('loader')

window.addEventListener('load', () =>{
   
   loader.classList.add('loading-out');

})
