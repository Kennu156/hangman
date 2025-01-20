const guessedWordDiv = document.getElementById('word');
const scoreSpan = document.getElementById('score');
const alphabetDiv = document.getElementById('alphabet');

const alphabet = 'abcdefghijklmoqrsšzžtuvõäöü'
let guessedLetters = [];

for  (let letter of alphabet) {
    const letterSpan = document.createElement('span', {'id': letter});
    letterSpan.innerText = letter.toUpperCase();

    letterSpan.addEventListener('click', e => {

        if ( guessedLetters.includes(letter) ) {
            guessedLetters.push(letter);
            console.log(letter);
        };

//        if ( guessedLetters =  ) {

  //      }
    });

    alphabetDiv.appendChild(letterSpan);
};

let score = 10;
scoreSpan.innerText = score;

let word = 'Kuressaare Ametikool';
let guessedWord = '';

for ( let char of word ) {
    if ( char.toUpperCase() != char.toLowerCase() ) {
        guessedWord += '_';
    } else {
        guessedWord += char;
    };
}

guessedWordDiv.innerText = guessedWord;

    
console.log(guessedWord);
