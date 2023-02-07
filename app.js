






import {characterData} from './data.js'
import {Character} from './characters.js'





 

function renderCharacters() {
    document.getElementById(wizard.id).innerHTML = wizard.getCharacterHtml();
    document.getElementById(orc.id).innerHTML = orc.getCharacterHtml();
}

function endGame() {
    const endMessage =  wizard.dead && orc.dead ? 'Both combatants are dead'
        : wizard.dead ? 'Wizard died'
        : 'The prey slaughtered';

    const endEmoji = orc.dead && wizard.dead ? '☠️'
        : orc.dead ? '🔮' 
        : '☠️';

    
    document.body.innerHTML = `
        <div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>` 
}

function attack() {
    wizard.getDiceHtml(characterData.hero.diceCount);
    orc.getDiceHtml(characterData.monster.diceCount);
    wizard.takeDamage(orc.currentDiceScore);
    orc.takeDamage(wizard.currentDiceScore);

    renderCharacters();
    
    if (wizard.dead || orc.dead) {
        endGame();
    } 
}


document.getElementById('attack-button').addEventListener('click', attack);


const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);

renderCharacters();








