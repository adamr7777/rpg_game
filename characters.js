


import {getDicePointArray, getDicePlaceholderHtml} from './utils.js'


const getHealthPerc = (maxHealth, health)=> 100 * health / maxHealth


function Character(data) {
    Object.assign(this, data);

   this.diceArray = getDicePlaceholderHtml(this.diceCount);

   this.maxHealth = this.health;
 
 
   
   this.getDiceHtml =  function(diceCount) {
         this.currentDiceScore = getDicePointArray(this.diceCount);       
         this.diceArray = this.currentDiceScore.map((item)=> `<div class="dice">${item}</div>`)
            .join('');
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
      const totalAttackScore = attackScoreArray.reduce((total, current)=> total + current);
      this.health -= totalAttackScore; 
      if (this.health <= 0) {
         this.health = 0
         this.dead = true;
      }
   }
}




export {Character};



