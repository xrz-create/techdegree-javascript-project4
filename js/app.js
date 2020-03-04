/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
const btn__reset = document.getElementById('btn__reset');

btn__reset.addEventListener('click', (b) => {
    game.startGame();
})

document.addEventListener('click', (e) => {
    if (e.target.className.match('key') && e.target.type == "submit"){
        game.handleInteraction(e.target.innerText);
    }    
})

document.addEventListener('keydown', (e) => {
    if (document.getElementById('overlay').style.display == 'none'){
        game.handleInteraction(e.key);
    }
})


