
    
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
        document.querySelector('#wins').innerHTML = "Wins: " + wins;
    }

    function updateLosses(){
        document.querySelector('#losses').innerHTML = "losses: " + losses;
    }

    function updateGuesses(){
        document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
        document.querySelector('#attemptedGuesses').innerHTML = "Your Guesses so far: " + attemptedGuesses;
    }

    generateCorrectAnswer();
    updateWins();
    updateLosses();
    updateGuesses();

    document.onkeyup = function(event) {

        var guess = event.key.toLowerCase();

        if (guess === correctAnswer){
            wins++;
            updateWins();
        }

        else{
            
        }
    }
