function maxChars(s) {

    var exploded = {}
    for (var char of s){
        if(!exploded[char]){
            exploded[char] = 1
        }
        else{
            exploded[char]++
        }
    }
    console.log(exploded)
    console.log()

    // YOU CAN CREATE AN ARRAY, ITERATE THROUGH THE OBJECT MAP, PUSH THE ITEMS INTO ARRAY, SORT IT AND RETURN
    // THE MOST FREQUENT LETTER

    var sortable = [];    
    for (var vehicle in exploded) {
        sortable.push([vehicle, exploded[vehicle]]);
    }
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    })
    console.log(sortable[0])


    // CREATE TWO VARIABLES (one for letter and number of instances), iterate through the object map,
    // and set the highest instance letter in the two variables, and then return them

    // var count = 0
    // var myChar = ''
    
    // for (let char in exploded){
    //     console.log(exploded[char]);
    //     if(exploded[char] > count){
    //         count = exploded[char]
    //         myChar = char
    //     }
    // }

    // console.log(count)
    // console.log(myChar);


}

var myString = "aaabbbbbbc"

maxChars(myString)