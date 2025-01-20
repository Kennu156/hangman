const guessedWordDiv = document.getElementById('word');
const scoreSpan = document.getElementById('score');
const alphabetDiv = document.getElementById('alphabet');

const alphabet = 'abcdefghijklmoqrsšzžtuvõäöü';
let guessedLetters = [];

let score = 10;
scoreSpan.innerText = score;

let word = 'Kuressaare Ametikool';
let guessedWord = [];

for (let char of word) {
    if (char.toUpperCase() != char.toLowerCase()) {
        guessedWord.push('_');
    } else {
        guessedWord.push(char); 
    }
}

guessedWordDiv.innerText = guessedWord.join(''); 

for (let letter of alphabet) {
    const letterSpan = document.createElement('span');
    letterSpan.innerText = letter.toUpperCase();
    
    letterSpan.addEventListener('click', e => {
        if (!guessedLetters.includes(letter)) {
            guessedLetters.push(letter);

            const lowerCaseWord = word.toLowerCase();
            if (lowerCaseWord.includes(letter)) {
                for (let i = 0; i < word.length; i++) {
                    if (word[i].toLowerCase() === letter) {
                        guessedWord[i] = word[i];
                    }
                }

                guessedWordDiv.innerText = guessedWord.join('');
                letterSpan.classList.add('correct');
            } else {
                score--;
                scoreSpan.innerText = score;
                letterSpan.classList.add('incorrect');
            }
        }
    });

    alphabetDiv.appendChild(letterSpan);
}
