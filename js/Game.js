/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases(){
        const phraseArray = [new Phrase("this is a phrase"),
                            new Phrase("this is another phrase"), 
                            new Phrase("third phrase"), 
                            new Phrase("fourth phrase"), 
                            new Phrase("the fifth and final phrase")];
        return phraseArray;
    }


    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase;   
    }


    /**
    * Begins game by selecting a random phrase and displaying it to user
    * Used Juan L's explanation to Olivia Gaslin in Slack's #unit-04
    * for this.activePhrase to equal this.getRandomPhrase() 
    * and making the activePhrase not 'null'. Thanks Juan L
    */
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

//on click or keyboard input, it checks for match and changes button attributes accordingly
    handleInteraction(letter){
        if (this.activePhrase.checkLetter(letter) == true) {
            for (let i = 0; i < this.activePhrase.phrase.length; i++){
                if (letter == this.activePhrase.phrase.split("",this.activePhrase.phrase.length)[i]) {
                    this.activePhrase.showMatchedLetter(letter);
                }
            }
            const changeButtonClass = document.getElementsByTagName('BUTTON'); 
            for (let i = 0; i < changeButtonClass.length; i++) {
                if (document.getElementsByTagName('BUTTON')[i].innerText == letter){
                    document.getElementsByTagName('BUTTON')[i].className = 'chosen';
                    document.getElementsByTagName('BUTTON')[i].setAttribute('disabled', true);
                    game.checkForWin();
                }
            }; 
            
        }  else {
            const changeButtonClass = document.getElementsByTagName('BUTTON');
            for (let i = 0; i < changeButtonClass.length; i++) {
                if (document.getElementsByTagName('BUTTON')[i].innerText == letter &&
                    document.getElementsByTagName('BUTTON')[i].disabled != true){
                    document.getElementsByTagName('BUTTON')[i].className = 'wrong';
                    document.getElementsByTagName('BUTTON')[i].setAttribute('disabled', true);
                    game.removeLife();
                }
            }; 
            
        } 
    };

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
        if (document.getElementsByClassName("hide letter").length < 1){
            game.gameOver(true);
        }
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        document.getElementsByClassName('tries')[game.missed].innerHTML = 
        '<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">';
        game.missed += 1;
        if (game.missed == 5){
            game.gameOver(false);
        }
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        function resetGameBoard(){
            const buttonArrayToLoopThrough = document.getElementsByTagName('BUTTON');
            for (let i = 0; i < buttonArrayToLoopThrough.length; i++) {
                if (buttonArrayToLoopThrough[i].className == 'wrong' ||
                    buttonArrayToLoopThrough[i].className == 'chosen'){
                    buttonArrayToLoopThrough[i].className = 'key';
                    buttonArrayToLoopThrough[i].removeAttribute('disabled');
                }
            }
            const resupplyHearts = document.getElementsByClassName('tries');
            for (let i = 0; i < resupplyHearts.length; i++){
                document.getElementsByClassName('tries')[i].innerHTML = 
                '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">';
            }
            const phraseDiv = document.getElementById('phrase');
            const phraseUlToDelete = document.getElementById('phrase').firstElementChild;
            phraseDiv.removeChild(phraseUlToDelete);
            const phraseUl = document.createElement('ul');
            phraseDiv.appendChild(phraseUl);
            game.missed = 0;
        }
        if (gameWon == true) {
            document.getElementById('overlay').className = 'win';
            document.getElementById('overlay').style.display = '';
            resetGameBoard();
        } else {
            document.getElementById('overlay').style.display = '';
            document.getElementById('overlay').className = 'lose';
            resetGameBoard();
        }
    };
}




