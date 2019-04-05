function reverseInt(num){
    console.log(num)
    var myArray = (""+num).split("");
    console.log(myArray)
    var len = myArray.length
    var tempTable = []
    for (var i = len-1; i >= 0; i--){
        tempTable.push(myArray[i])
    }
    console.log(tempTable.join(""))
    return tempTable.join("");

}
myInt = 19
reverseInt(myInt)
