






import {characterData} from './data.js'
import {Character} from './characters.js'




let monstersArray = ["orc", "demon", "goblin"];

function getNewMonster() {
        const nextMonsterData = characterData[monstersArray.shift()]
        return nextMonsterData ? new Character(nextMonsterData) : {};
}






 

function renderCharacters() {
    document.getElementById(wizard.id).innerHTML = wizard.getCharacterHtml();
    document.getElementById('monster').innerHTML = monster.getCharacterHtml();
}



function endGame() {
    const endMessage =  wizard.dead && monster.dead ? 'Both combatants are dead'
        : wizard.dead ? 'Wizard died'
        : 'The prey slaughtered';

    const endEmoji = monster.dead && wizard.dead ? '☠️'
        : monster.dead ? '🔮' 
        : '☠️';

    
    document.body.innerHTML = `
        <div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>` 
}

function attack() {
    wizard.getDiceHtml(); 
    monster.getDiceHtml();     
    wizard.takeDamage(monster.currentDiceScore);
    monster.takeDamage(wizard.currentDiceScore);

    renderCharacters();

    if (wizard.dead) {
        document.getElementById('attack-button').disabled = true;
        setTimeout(()=>endGame(), 1500);
    }

    else if (monster.dead) {
        document.getElementById('attack-button').disabled = true;
        if (monstersArray.length > 0) {
            setTimeout(()=>{
                monster = getNewMonster();
                renderCharacters();
                document.getElementById('attack-button').disabled = false;
            }, 1500);
            
        }
        else {
            setTimeout(()=>endGame(), 1500);
        }
    }
        

}

document.getElementById('attack-button').addEventListener('click', attack);

const wizard = new Character(characterData.hero);
let monster = getNewMonster();


renderCharacters();








