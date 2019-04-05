function staircase(n) {
    
    // Create an empty table and push the N amount of spaces into it
    var foo = [];
    for (var i = 1; i <= n; i++) {
        foo.push(" ");
    }

    // Determine the length of the n array
    var len = foo.length

    // Create a for-loop and then add # to the last element after each iteration
    for (var i = 0; i < len; i++) {
        foo.splice(len, 0, "#")
        foo.splice(0, 1)

        console.log(foo.join(""))
    }
