
    
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var attemptedGuesses = [];

    function generateCorrectAnswer(){
        var correctIndex = Math.floor(Math.random() * 26);
        var correctAnswer = letters[correctIndex];
        return correctAnswer;
    }

    function updateWins(){
        document.getElementById('wins').innerHTML = "Wins: " + wins;
    }

    function updateLosses(){
        document.getElementById('losses').innerHTML = "losses: " + losses;
    }

    function updateGuesses(){
        document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
        document.getElementById('attemptedGuesses').innerHTML = "Your Guesses so far: " + attemptedGuesses;
    }

    var correctAnswer = generateCorrectAnswer();
    console.log(correctAnswer);
    updateWins();
    updateLosses();
    updateGuesses();

    document.onkeyup = function(event) {

        var guess = event.key.toLowerCase();

        if (guess === correctAnswer){
            wins++;
            updateWins();
            guessesLeft = 9;
            attemptedGuesses = [];
            updateGuesses();
            correctAnswer = generateCorrectAnswer();
            console.log(correctAnswer);
        }

        else if(guessesLeft === 1){
            losses++;
            updateLosses();
            guessesLeft = 9;
            attemptedGuesses = [];
            updateGuesses();
            correctAnswer = generateCorrectAnswer();
            console.log(correctAnswer);
        }

        else{
            guessesLeft--;
            attemptedGuesses.push(guess);
            updateGuesses();
        }
    }