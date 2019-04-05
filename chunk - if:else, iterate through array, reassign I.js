
function chunk(arr,size){

    // Creating a table with an undefined amount of spaces
    const chunked = []
    var len = arr.length

    // If/else statement the two scenarios
    if (size > len){
        // Throw the whole array into the chunked table and return it
        console.log(arr);
        chunked.push(arr)
    }else{
        for(var i = 0; i < len; i++){
            // Iterate through the given array, and start adding it to the constant table 
            // in chunks i.e. the slice mechanism
            console.log(arr.slice(i,size+i));
            chunked.push(arr.slice(i,size+i))
            i = i + size - 1  
        }
    }
    console.log(chunked);
    return chunked

}

myArray = [1,2,3,4,5,6,7,8,9]
mySize = 8

chunk(myArray, mySize)

// THIS VERSION USES A WHILE LOOP

// function chunk1(arr,size){
//     const chunked = []
//     let index = 0

//     while (index < arr.length){
//         chunked.push(arr.slice(index, index+size))
//         index += size
//     }
// }
