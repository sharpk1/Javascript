function findTheDifference(s,t){
    //break the two strings into an array
    var arrS = s.split("") //returns ["a","e"] 
    var lenS = arrS.length
    var arrT = t.split("") // returns ["a", "e", "a"]
    // var lenT = arrT.length -- REMOVED THIS 
    // var tempTable = [] -- REMOVED THIS 
    // var noSimilar = [] -- REMOVED THIS 
    //debugger
    // for (var i = 0; i < lenS; i++){
    //     for (var j = 0; j < lenT;j++){
    //         if (arrS[i] === arrT[j]){ 
                
    //         }
            
    //     }
        
    // }
    for(var i = 0; i < lenS; i++){ // CHANGED lenT to lenS
        if (arrT[i] !== arrS[i]){ // CHANGED arrS[i] === arrT[i] to arrT[i] !== arrS[i]
            console.log(arrT[i])
            return arrT[i] // CHANGED console.log(arrT[i]) to return tChars[i];
             
        } // REMOVED else statement
        
    }
    console.log(arrT[i])
    return arrT[i]
    
    
}

var myStringS = "abcdefgh"
var myStringT = "abcdefghi"




// function findTheDifference(s,t){
//     //C1: Sort the string in descending order
//     debugger
//     var arrayS = s.split("").sort(function(a,b){return a-b})
//     var arrayT = t.split("").sort(function(a,b){return a-b})
//     var len = s.length

//     //C2: Iterate through the shorter string
//     //C3: The moment you meet a letter that is not the same on the longer string
//     // return it
//     for (var i = 0; i < len; i++){
//         if(arrayS[i] !== arrayT[i]){
//             console.log(arrayT[i])
//             return arrayT[i]
//         }
//     }
//     console.log(arrayT[i])
//     return arrayT[i]
// }

// var myS = "abcd"
// var myT = "abcde"
// findTheDifference(myS,myT)