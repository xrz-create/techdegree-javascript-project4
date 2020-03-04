/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const phraseUl = document.getElementById('phrase').firstElementChild;
        for (let i = 0; i < this.phrase.length; i++){
            const phraseLi = document.createElement('li');
            if (this.phrase.split("",this.phrase.length)[i] == " ") {
                phraseLi.className = "space";
                phraseLi.textContent = " ";
            } else {
                phraseLi.className = "hide letter " + this.phrase.split("",this.phrase.length)[i];
                phraseLi.textContent = this.phrase.split("",this.phrase.length)[i];
            }
            phraseUl.appendChild(phraseLi);
        }
    };
    
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        if (document.getElementsByClassName("hide letter " + letter).length > 0) {
            return true;
        } else if (document.getElementsByClassName("hide letter " + letter).length == 0) {
            return false;
        }
    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const goodLetters = document.getElementsByClassName("hide letter " + letter);
        for (let i = 0; i < goodLetters.length; i++){
            goodLetters[i].className = 'show';
        }
    };

}
