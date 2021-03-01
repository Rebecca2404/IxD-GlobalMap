import {yearbookMap} from './Map/map.js';

yearbookMap.init();

fetch('../map.json').then(response => response.json()).then(data => console.log(data))