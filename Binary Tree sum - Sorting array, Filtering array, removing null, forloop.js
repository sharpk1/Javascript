
var rangeSumBST = function(root, L, R) {
    // Sort the array by ascending order
    root = root.sort(function(a,b){return a-b})

    // Filter the array by removing the nulls
    root = root.filter(function (number) {
        return number != null;
    })

    // Create a length variable for better runtime & create addedSum variable to add to
    var len = root.length
    var addedSum = 0

    // Iterate through the array only adding the numbers are (L <= x <= R)
    for (var i = 0; i<len; i++){
        if ((root[i] >= L) && (root[i] <= R)){
            addedSum += root[i]
        }
    }
    return addedSum
    
}

var myRoot = [10,5,15,3,7,null,18]
var myL = 7
var myR = 15

rangeSumBST(myRoot,myL,myR)

// Sorting array, Filtering array, removing null, forloop