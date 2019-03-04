/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, firstDiceSix, secondDiceSix, scoreToReach



init();


function init(){
    
    gamePlaying = true
    scores = [0,0]
    roundScore = 0
    activePlayer = 0 //0 is player1, 1 is player2
    firstDiceSix = false
    scoreToReach = 100
    
    //This will remove the dice from the get go
    document.querySelector(".dice").style.display = 'none'
    document.querySelector(".dice1").style.display = 'none'

    
    //These will set the score and current's to zero.
    document.getElementById('score-0').textContent = "0"
    document.getElementById('score-1').textContent = "0"
    document.getElementById('current-0').textContent = "0"
    document.getElementById('current-1').textContent = "0"
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.add('active')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('#name-0').textContent = 'Player 1'
    document.querySelector('#name-1').textContent = 'Player 2'

}


document.querySelector('.btn-roll').addEventListener('click', function() {
    //debugger
    if (gamePlaying){
        //1. Random number needed 3/3/19 - Second dice was added
        //return Math.floor(Math.random()*(max-min+1)+min);
        //return Math.floor(Math.random()*(6-2+1)+2); 
        var dice = Math.floor(Math.random()*(6-2+1)+2)
        var dice1 = Math.floor(Math.random()*(6-2+1)+2)

        console.log(dice + ' and ' + dice1)
    
        // If this is the first time player hits a six, make the variable true
        if (dice === 6 && firstDiceSix == false){
            firstDiceSix = true
        }else if (firstDiceSix == true && dice === 6){
            secondDiceSix = true
        }else if (firstDiceSix == true && secondDiceSix == true){

            // reset the die 
            firstDiceSix = false
            secondDiceSix = false

            // reset the score of the Global and Current of activePlayer
            document.getElementById('score-' + activePlayer).textContent = "0"
            document.getElementById('current-' + activePlayer).textContent = "0"
            
            
            //Go to the next player
            nextPlayer()
        }

        //2. Need to display
        // Add another dice. Override the 'left' positioning to 45 and 55%?
        var diceDOM = document.querySelector('.dice')
        var diceDOM1 = document.querySelector('.dice1')

        //diceDOM1.style.display = 'block'
        //diceDOM1.style.left = "55%"
        diceDOM.style.display = 'block'
        diceDOM.style.left = "45%"
        diceDOM.src = 'dice-' + dice + '.png'

        diceDOM1.style.display = 'block'
        diceDOM1.style.left = "55%"
        diceDOM1.src = 'dice-' + dice1 + '.png'
        //diceDOM1.src = 'dice-' + dice1 + '.png'


        if (dice !== 1 && dice1 !== 1){
            //Add Score
            var total = dice + dice1
            roundScore += total //updates the round score
            document.querySelector('#current-' + activePlayer).textContent = roundScore //displays the round score
        }else{
            nextPlayer()
        }
            
        }
        
})

document.getElementById('submitBtn').addEventListener('click', function (){
    
    // get the value of what is in the textbox and then set it to scoreToReach
    scoreToReach = document.getElementById("setScoreTextBox").value
})

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying == true){
        // Add CURRENT score to the GLOBAL score
        scores[activePlayer] += roundScore

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

        //var scoreToReach = 10
        //Check if the player has won the game
        if (scores[activePlayer] >= scoreToReach){
            //document.getElementById('name-' + activePlayer).style.color = "#DC143C"
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
            document.querySelector('.dice').style.display = 'none'
            document.querySelector('.dice1').style.display = 'none'
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
            gamePlaying = false
        } else{
            nextPlayer()
        }
    }  
})

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    //when player is 0 then it should be 1, else it should be 0
    roundScore = 0
    document.getElementById("current-0").textContent = "0"
    document.getElementById("current-1").textContent = "0"

    document.querySelector(".player-0-panel").classList.toggle('active')
    document.querySelector(".player-1-panel").classList.toggle('active')

    document.querySelector(".dice").style.display = 'none'
    document.querySelector(".dice1").style.display = 'none'

}

// New Game button
document.querySelector('.btn-new').addEventListener('click',init) 
