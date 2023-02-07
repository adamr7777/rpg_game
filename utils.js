


import {characterData} from './data.js'



export function getDicePointArray(diceCount) {
    return new Array(diceCount).fill(0).map(function() {
       return Math.floor(Math.random()*6) + 1
    })
 }

 

 export function getDicePlaceholderHtml(diceCount) {
   return new Array(diceCount).fill(`<div class="placeholder-dice"></div>`).join('');
}

