/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying

init();


function init(){
    gamePlaying = true
    scores = [0,0]
    roundScore = 0
    activePlayer = 0 //0 is player1, 1 is player2
    
    //This will remove the dice from the get go
    document.querySelector(".dice").style.display = 'none'
    
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
    //debugger;
    if (gamePlaying){
        //1. Random number needed
        var dice = Math.floor(Math.random() * 6) + 1

        //2. Need to display
        var diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block'
        diceDOM.src = 'dice-' + dice + '.png'

        if (dice !== 1){
            //Add Score
            roundScore += dice //updates the round score
            document.querySelector('#current-' + activePlayer).textContent = roundScore //displays the round score
        }else{
            nextPlayer()
        }
            
        }
        
})

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying == true){
        // Add CURRENT score to the GLOBAL score
        scores[activePlayer] += roundScore

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

        //Check if the player has won the game
        if (scores[activePlayer] >= 10){
            //document.getElementById('name-' + activePlayer).style.color = "#DC143C"
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
            document.querySelector('.dice').style.display = 'none'
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

}


document.querySelector('.btn-new').addEventListener('click',init) 

/*
function(){
// Set the panels back to normal
document.querySelector('.player-0-panel').classList.remove('winner')
document.querySelector('.player-0-panel').classList.add('active')
document.querySelector('.player-1-panel').classList.remove('winner')

// Remove the global scores and Remove the current scores
document.getElementById('score-0').textContent = "0"
document.getElementById('score-1').textContent = "0"
document.getElementById('current-0').textContent = "0"
document.getElementById('current-1').textContent = "0"

// Set the label for the activePlayer back to Player 1 or 2
if (activePlayer === 0){
    document.querySelector('#name-' + activePlayer).textContent = 'Player 1'
}else{
    document.querySelector('#name-' + activePlayer).textContent = 'Player 2'
}
// Set the roundScore back to 0
roundScore = 0
scores = [0,0]

// Reset the activePlayer to 0
activePlayer = 0

// Get rid of the dice
document.querySelector(".dice").style.display = 'none'

})


//if Player 2 has won the game check to see if he has a score of 100 or above
}

//next player is toggled
activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;   
document.querySelector(".player-0-panel").classList.toggle('active')
document.querySelector(".player-1-panel").classList.toggle('active')

//current score gets added to the actual score


//current score is now set to 0
if (activePlayer === 0){
document.getElementById('current-0').textContent = document.getElementById('score-0').textContent
document.getElementById('current-0').textContent = "0"
}else{
document.getElementById('current-1').textContent = document.getElementById('current-1').textContent
document.getElementById('current-1').textContent = "0"
}   

*/


