function capitalize(str){
    str = str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase() } )
    console.log(str)
}

string1 = "a short sentence"
string2 = "a lazy fox"
string3 = "look, it is working!"

capitalize(string1)
capitalize(string2)
capitalize(string3)

// Regex, string manipulation