
function jobOffers(scores, lowerLimits, upperLimits) {
    var sortedScores = scores.sort(function(a,b){return a-b})
    console.log(sortedScores)
    var tempTable = []
    var len = scores.length
    for (var i = 0; i < len; i++){
        if(tempTable.indexOf(scores[i]) === -1){
            tempTable.push(scores[i])
        }
    }

    var finalTable = []

    for (var i = 0; i <tempTable.length; i++){
        if((tempTable[i] >= lowerLimits) && (tempTable[i] <= upperLimits)){
            finalTable.push(tempTable[i])
        }
        
    }
    console.log(finalTable)

    var finalNumberOffers = finalTable.length-1 
    console.log(finalNumberOffers)
    return finalNumberOffers

}


var myArray = [5,1,3,5,6,8,1,2,1,6]
var myLower = 2
var myHigher = 6

jobOffers(myArray, myLower, myHigher)
