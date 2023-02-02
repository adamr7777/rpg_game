






import {characterData} from './data.js'
import {Character} from './characters.js'








 

function renderCharacters() {
    const wizard = new Character(characterData.hero);
    const orc = new Character(characterData.monster);

    document.getElementById(wizard.id).innerHTML = wizard.getCharacterHtml();
    document.getElementById(orc.id).innerHTML = orc.getCharacterHtml();
}

renderCharacters();


