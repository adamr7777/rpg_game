


import {getDicePointArray, getDicePlaceholderHtml, getHealthPerc} from './utils.js'




class Character {
   constructor(data) {
      Object.assign(this, data);

      this.diceArray = getDicePlaceholderHtml(this.diceCount);

      this.maxHealth = this.health;
   }
   
 
   
   getDiceHtml() { 
         this.currentDiceScore = getDicePointArray(this.diceCount);       
         this.diceArray = this.currentDiceScore.map((item)=> `<div class="dice">${item}</div>`)
            .join('');
   }
 
   getCharacterHtml() {
      const {id, name, avatar, health, diceCount, diceArray} = this;
      const diceHtml = this.getDiceHtml(diceCount);
      const healthBar = this.getHealthBarHtml();
       return ` 
       <div class="character-card">
          <h4 class="name">${name}</h4>
          <img class="avatar" src='${avatar}'/>
          <p class="health">health:<b>${health}</b></p>
          ${healthBar}
          <div class="dice-container">
             ${diceArray}
          </div>
       </div>`
    }

   getHealthBarHtml() {
      const percent = getHealthPerc(this.maxHealth, this.health)

      return `<div class="health-bar-outer">
                  <div class="health-bar-inner ${percent <=25 ? 'danger' : ''}" 
                     style="width: ${percent}%;">
                  </div>
               </div>`
    }

   

   takeDamage(attackScoreArray) {
      const totalAttackScore = attackScoreArray.reduce((total, current)=> total + current);
      this.health -= totalAttackScore; 
      if (this.health <= 0) {
         this.health = 0
         this.dead = true;
      }
   }
}




export {Character};



