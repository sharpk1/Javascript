
// function anagrams(string1,string2){
//     // Remove the punctuation from the string
//     var string1 = string1.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
//     var string2 = string2.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")

//     // Lower case the whole string
//     string1 = string1.toLowerCase()
//     string2 = string2.toLowerCase()

//     // Cast the string into an array
//     var arrString1 = string1.split("")
//     var arrString2 = string2.split("")

//     // Sort the array so that it is alphabetical
//     arrString1.sort()
//     arrString2.sort()

//     // Cast that array back into a string
//     var myNewString1 = arrString1.toString()
//     var myNewString2 = arrString2.toString()
//     console.log(myNewString1);
//     console.log(myNewString2);

//     // If the strings are the same -- return true for an anagram. Otherwise it is false.
//     if (myNewString1 === myNewString2){
//         console.log('true')
//         return true
//     }else{
//         console.log("false")
//         return false
//     }
// }

// var myString1 = "rail safety"
// var myString2 = "fairy tales"

// anagrams(myString1,myString2)

