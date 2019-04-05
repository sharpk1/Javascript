// ```
// function jobOffers(scores, lowerLimits, upperLimits) {
//     var sortedScores = scores.sort(function(a,b){return a-b})
//     console.log(sortedScores)
//     var tempTable = []
//     var len = scores.length
//     for (var i = 0; i < len; i++){
//         if(tempTable.indexOf(scores[i]) === -1){
//             tempTable.push(scores[i])
//         }
//     }

//     var finalTable = []

//     for (var i = 0; i <tempTable.length; i++){
//         if((tempTable[i] >= lowerLimits) && (tempTable[i] <= upperLimits)){
//             finalTable.push(tempTable[i])
//         }
        
//     }
//     console.log(finalTable)

//     var finalNumberOffers = finalTable.length-1 
//     console.log(finalNumberOffers)
//     return finalNumberOffers

// }


// var myArray = [5,1,3,5,6,8,1,2,1,6]
// var myLower = 2
// var myHigher = 6

// jobOffers(myArray, myLower, myHigher)
// ```
// var myWord = ['add','aab']
// console.log(myWord[0][0])



// function findTheDifference(s,t){
//     //break the two strings into an array
//     var arrS = s.split("") //returns ["a","e"] 
//     var lenS = arrS.length
//     var arrT = t.split("") // returns ["a", "e", "a"]
//     // var lenT = arrT.length -- REMOVED THIS 
//     // var tempTable = [] -- REMOVED THIS 
//     // var noSimilar = [] -- REMOVED THIS 
//     //debugger
//     // for (var i = 0; i < lenS; i++){
//     //     for (var j = 0; j < lenT;j++){
//     //         if (arrS[i] === arrT[j]){ 
                
//     //         }
            
//     //     }
        
//     // }
//     for(var i = 0; i < lenS; i++){ // CHANGED lenT to lenS
//         if (arrT[i] !== arrS[i]){ // CHANGED arrS[i] === arrT[i] to arrT[i] !== arrS[i]
//             console.log(arrT[i])
//             return arrT[i] // CHANGED console.log(arrT[i]) to return tChars[i];
             
//         } // REMOVED else statement
        
//     }
//     console.log(arrT[i])
//     return arrT[i]
    
    
// }

// var myStringS = "abcdefgh"
// var myStringT = "abcdefghi"

// findTheDifference(myStringS, myStringT)


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



// function staircase(n) {
    
//     // Create an empty table and push the N amount of spaces into it
//     var foo = [];
//     for (var i = 1; i <= n; i++) {
//         foo.push(" ");
//     }

//     // Determine the length of the n array
//     var len = foo.length

//     // Create a for-loop and then add # to the last element after each iteration
//     for (var i = 0; i < len; i++) {
//         foo.splice(len, 0, "#")
//         foo.splice(0, 1)

//         console.log(foo.join(""))
//     }


// }

// staircase(4)

// function timeConversion(s) {
    // var foo = [];
    // var len = s.length
    // for (var i = 0; i <= len-1; i++) {
        
    //     foo.push(s[i]);
    // }
    // console.log(foo)
    // console.log(foo[8])
    // console.log(foo[0])
    // console.log(foo[1])
    
    // // This first condition is for 1 PM to 11 PM -- complete
    // // Second condition is for 1 AM to 11 AM -- complete
    // // Third condition is 12 PM 
    // // Fourth conditiion is 12 AM
    // if((foo[8] == "P") && (foo[0] >= 0 && foo[0] <= 1) && (foo[1] <= 1)){
    //     // Shave off PM 
    //     foo.splice(-1,1)
    //     foo.splice(-1,1)

    //     // Arithmetic to add 12 to the first two numbers
    //     var hourTens = parseInt(foo[0]) 
    //     var hourOnes = parseInt(foo[1])
    //     hourTens = hourTens + 1 
    //     hourOnes = hourOnes + 2
    //     console.log(foo)
    //     // Put it back into array
    //     foo.splice(0,1)
    //     foo.splice(0,0,hourTens)
    //     foo.splice(1,1)
    //     foo.splice(1,0,hourOnes)

    //     // Create the new string in military
    //     var newString = foo.join("")
    // }else if ((foo[8] == "A") && (foo[0] >= 0 && foo[0] <= 1) && (foo[1] <= 1)){
    //     // Shave off AM 
    //     foo.splice(-1,1)
    //     foo.splice(-1,1)

    //     // Arithmetic to add 0 to the ones and tens place
    //     var hourTens = parseInt(foo[0]) 
    //     var hourOnes = parseInt(foo[1])
    //     hourTens = hourTens + 0 
    //     hourOnes = hourOnes + 0
    //     console.log(foo)
    //     // Put it back into array
    //     foo.splice(0,1)
    //     foo.splice(0,0,hourTens)
    //     foo.splice(1,1)
    //     foo.splice(1,0,hourOnes)

    //     // Create the new string in military
    //     var newString = foo.join("")
    //     console.log(newString)
    // } else if ((foo[8] == "P") && (foo[0] == 1) && (foo[1] == 2)){
    //     console.log('this triggers')
    //     // Shave off PM 
    //     foo.splice(-1,1)
    //     foo.splice(-1,1)

    //     // Arithmetic to add 0 to the ones and tens place
    //     var hourTens = parseInt(foo[0]) 
    //     var hourOnes = parseInt(foo[1])
    //     hourTens = hourTens + 0 
    //     hourOnes = hourOnes + 0
    //     console.log(foo)
    //     // Put it back into array
    //     foo.splice(0,1)
    //     foo.splice(0,0,hourTens)
    //     foo.splice(1,1)
    //     foo.splice(1,0,hourOnes)
    //     console.log(foo)

    //     // Create the new string in military
    //     var newString = foo.join("")
    //     console.log(newString)
    // } else if ((foo[8] == "A") && (foo[0] == 1) && (foo[1] == 2)){
    //     // Shave off AM 
    //     foo.splice(-1,1)
    //     foo.splice(-1,1)

    //     // Arithmetic to add 0 to the ones and tens place
    //     var hourTens = parseInt(foo[0]) 
    //     var hourOnes = parseInt(foo[1])
    //     hourTens = hourTens - 1 
    //     hourOnes = hourOnes - 2
    //     console.log(foo)
    //     // Put it back into array
    //     foo.splice(0,1)
    //     foo.splice(0,0,hourTens)
    //     foo.splice(1,1)
    //     foo.splice(1,0,hourOnes)

    //     // Create the new string in military
    //     var newString = foo.join("")
    //     console.log(newString)
    // }


//     // Creating a variable for the last two elements/characters of the string i.e. -2
//     let AMPM = s.slice(-2);
    
//     // Remove the last two characters of said string, and split the string wherever you find a colon
//     let timeArr = s.slice(0, -2).split(":");

//     if (AMPM === "AM" && timeArr[0] === "12") {
//         // catching edge-case of 12AM
//         timeArr[0] = "00";
//     } else if (AMPM === "PM") {
//         // everything with PM can just be mod'd and added with 12 - the max will be 23
//         timeArr[0] = (timeArr[0] % 12) + 12
//     }
//     console.log(timeArr.join(":"))
//     return timeArr.join(":");

    
    

// }


// var time = "9:05:45PM"


// timeConversion(time)


// let reg = /a{1,9}/i // The i is a flag to get capital A too. {min,max}
// console.log(reg.test('A'))



// function reverseInt(num){
//     console.log(num)
//     var myArray = (""+num).split("");
//     console.log(myArray)
//     var len = myArray.length
//     var tempTable = []
//     for (var i = len-1; i >= 0; i--){
//         tempTable.push(myArray[i])
//     }
//     console.log(tempTable.join(""))
//     return tempTable.join("");

// }
// myInt = 69
// reverseInt(myInt)



// function gradingStudents(grades) {
//     var len = grades.length
//     var tempTable = []
//     console.log(round5(67))
//     for (var i = 0;i < len; i++){
        
//         if (((round5(grades[i])) - grades[i] < 3) && (grades[i] >= 38)){
//             console.log(round5(grades[i]))
//             tempTable.push(round5(grades[i]))
//         }else if (((round5(grades[i])) - grades[i] >= 3) && (grades[i] >= 38)){
//             tempTable.push(grades[i])
//         }else{
//             tempTable.push(grades[i])
//         }
//     }
//     return tempTable
//     function round5(x)
//     {
//         return Math.ceil(x/5)*5;
//     }

//     console.log(tempTable)
// }

// var myGrade = [73,
//     67,
//     38,
//     33]

// gradingStudents(myGrade)



// function countApplesAndOranges(s, t, a, b, apples, oranges) {


// }

// countApplesAndOranges(7, 11, 5, 15, [-2,2,1], [5,-6])


// function maxChars(s) {

//     var exploded = {}
//     for (var char of s){
//         if(!exploded[char]){
//             exploded[char] = 1
//         }
//         else{
//             exploded[char]++
//         }
//     }
//     console.log(exploded)

//     // YOU CAN CREATE AN ARRAY, ITERATE THROUGH THE OBJECT MAP, PUSH THE ITEMS INTO ARRAY, SORT IT AND RETURN
//     // THE MOST FREQUENT LETTER

//     var sortable = [];    
//     for (var vehicle in exploded) {
//         sortable.push([vehicle, exploded[vehicle]]);
//     }
//     sortable.sort(function(a, b) {
//         return b[1] - a[1];
//     })
//     console.log(sortable[0])


//     // CREATE TWO VARIABLES (one for letter and number of instances), iterate through the object map,
//     // and set the highest instance letter in the two variables, and then return them

//     // var count = 0
//     // var myChar = ''
    
//     // for (let char in exploded){
//     //     console.log(exploded[char]);
//     //     if(exploded[char] > count){
//     //         count = exploded[char]
//     //         myChar = char
//     //     }
//     // }

//     // console.log(count)
//     // console.log(myChar);


// }

// var myString = "aaabbbbbbc"

// maxChars(myString)


// function chunk(arr,size){
//         const chunked = []
//         var len = arr.length
//         if (size > len){
//             console.log(arr);
//         }else{
//             for(var i = 0; i < len; i++){
//                 console.log(arr.slice(i,size+i));
//                 chunked.push(arr.slice(i,size+i))
//                 i = i + size - 1  
//             }
//         }
//         console.log(chunked);
//         return chunked

// }

// myArray = [1,2,3,4,5,6,7,8,9]
// mySize = 8

// chunk(myArray, mySize)


// function anagrams(string1,string2){
//     const string1CharMap = buildCharMap(string1)
//     const string2CharMap = buildCharMap(string2)

//     // const obj = {
//     //     A:1,
//     //     B:89,
//     //     C:1
//     //   }
//     //   Object.keys(obj).length will return 3

//     if (Object.keys(string1CharMap) !== Object.keys(string2CharMap)){
//         // Not an anagram because they dont have even have the same amount of chars
//         console.log('false')
//         return false
//     }
    
//     for (var char in string1CharMap){
//         if (string1CharMap[char] !== string2CharMap[char]){
//             console.log('false')
//             return false
//         }
//     }
//     console.log('this is true')
//     return true

    
// }

// function buildCharMap(str){

//     const charMap = {}
    
//     for (var char of str.replace(/[^A-Z0-9]+/ig, "")){
//         charMap[char] = charMap[char] + 1 || 1
//     }
//     console.log(charMap)
//     return charMap
// }

// var myString1 = "rail safety"
// var myString2 = "fairy tales"

// anagrams(myString1,myString2)


// const obj = {
//     A:1,
//     B:89,
//     C:1
// }
// const obj2 = {
//     A:1,
//     B:89,
//     C:1
// }

// for (let char in obj){
//     if (obj[char] === obj2[char]){
//         console.log('true')
//     }
// }


// function capitalize(str){
//     str = str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
//         return letter.toUpperCase() } )
//     console.log(str)
// }

// string1 = "a short sentence"
// string2 = "a lazy fox"
// string3 = "look, it is working!"

// capitalize(string1)
// capitalize(string2)
// capitalize(string3)


function anagrams(string1,string2){
    // Remove the punctuation from the string
    var string1 = string1.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    var string2 = string2.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")

    // Lower case the whole string
    string1 = string1.toLowerCase()
    string2 = string2.toLowerCase()

    // Cast the string into an array
    var arrString1 = string1.split("")
    var arrString2 = string2.split("")

    // Sort the array so that it is alphabetical
    arrString1.sort()
    arrString2.sort()

    // Cast that array back into a string
    var myNewString1 = arrString1.toString()
    var myNewString2 = arrString2.toString()
    console.log(myNewString1);
    console.log(myNewString2);

    // If the strings are the same -- return true for an anagram. Otherwise it is false.
    if (myNewString1 === myNewString2){
        console.log('true')
        return true
    }else{
        console.log("false")
        return false
    }
}

var myString1 = "rail safety"
var myString2 = "fairy tales"

anagrams(myString1,myString2)


