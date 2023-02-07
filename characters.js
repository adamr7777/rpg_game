


import {getDicePointArray, getDicePlaceholderHtml} from './utils.js'



function Character(data) {
    Object.assign(this, data);

    this.diceArray = getDicePlaceholderHtml(this.diceCount);
 
 
    this.getDiceHtml =  function(diceCount) {
      this.currentDiceScore = getDicePointArray(this.diceCount);       
      this.diceArray = this.currentDiceScore.map(function(item) {
         return `<div class="dice">${item}</div>`
      }).join('');
    }
 
    this.getCharacterHtml = function() {
       const {id, name, avatar, health, diceCount, diceArray} = this;
      const diceHtml = this.getDiceHtml(diceCount);
       return ` 
       <div class="character-card">
          <h4 class="name">${name}</h4>
          <img class="avatar" src='${avatar}'/>
          <p class="health">health:<b>${health}</b></p>
          <div class="dice-container">
             ${diceArray}
          </div>
       </div>`
    }

    this.takeDamage = function(attackScoreArray) {
         const totalAttackScore = attackScoreArray.reduce(function(total, current) {
            return total + current
         })
         this.health -= totalAttackScore; 
         if (this.health <= 0) {
            this.health = 0
            this.dead = true;
      }
   }
 } 



 export {Character};