function timeConversion(s) {
    var foo = [];
    var len = s.length
    for (var i = 0; i <= len-1; i++) {
        
        foo.push(s[i]);
    }
    console.log(foo)
    console.log(foo[8])
    console.log(foo[0])
    console.log(foo[1])
    
    // This first condition is for 1 PM to 11 PM -- complete
    // Second condition is for 1 AM to 11 AM -- complete
    // Third condition is 12 PM 
    // Fourth conditiion is 12 AM
    if((foo[8] == "P") && (foo[0] >= 0 && foo[0] <= 1) && (foo[1] <= 1)){
        // Shave off PM 
        foo.splice(-1,1)
        foo.splice(-1,1)

        // Arithmetic to add 12 to the first two numbers
        var hourTens = parseInt(foo[0]) 
        var hourOnes = parseInt(foo[1])
        hourTens = hourTens + 1 
        hourOnes = hourOnes + 2
        console.log(foo)
        // Put it back into array
        foo.splice(0,1)
        foo.splice(0,0,hourTens)
        foo.splice(1,1)
        foo.splice(1,0,hourOnes)

        // Create the new string in military
        var newString = foo.join("")
    }else if ((foo[8] == "A") && (foo[0] >= 0 && foo[0] <= 1) && (foo[1] <= 1)){
        // Shave off AM 
        foo.splice(-1,1)
        foo.splice(-1,1)

        // Arithmetic to add 0 to the ones and tens place
        var hourTens = parseInt(foo[0]) 
        var hourOnes = parseInt(foo[1])
        hourTens = hourTens + 0 
        hourOnes = hourOnes + 0
        console.log(foo)
        // Put it back into array
        foo.splice(0,1)
        foo.splice(0,0,hourTens)
        foo.splice(1,1)
        foo.splice(1,0,hourOnes)

        // Create the new string in military
        var newString = foo.join("")
        console.log(newString)
    } else if ((foo[8] == "P") && (foo[0] == 1) && (foo[1] == 2)){
        console.log('this triggers')
        // Shave off PM 
        foo.splice(-1,1)
        foo.splice(-1,1)

        // Arithmetic to add 0 to the ones and tens place
        var hourTens = parseInt(foo[0]) 
        var hourOnes = parseInt(foo[1])
        hourTens = hourTens + 0 
        hourOnes = hourOnes + 0
        console.log(foo)
        // Put it back into array
        foo.splice(0,1)
        foo.splice(0,0,hourTens)
        foo.splice(1,1)
        foo.splice(1,0,hourOnes)
        console.log(foo)

        // Create the new string in military
        var newString = foo.join("")
        console.log(newString)
    } else if ((foo[8] == "A") && (foo[0] == 1) && (foo[1] == 2)){
        // Shave off AM 
        foo.splice(-1,1)
        foo.splice(-1,1)

        // Arithmetic to add 0 to the ones and tens place
        var hourTens = parseInt(foo[0]) 
        var hourOnes = parseInt(foo[1])
        hourTens = hourTens - 1 
        hourOnes = hourOnes - 2
        console.log(foo)
        // Put it back into array
        foo.splice(0,1)
        foo.splice(0,0,hourTens)
        foo.splice(1,1)
        foo.splice(1,0,hourOnes)

        // Create the new string in military
        var newString = foo.join("")
        console.log(newString)
    }


    // Creating a variable for the last two elements/characters of the string i.e. -2
    let AMPM = s.slice(-2);
    
    // Remove the last two characters of said string, and split the string wherever you find a colon
    let timeArr = s.slice(0, -2).split(":");

    if (AMPM === "AM" && timeArr[0] === "12") {
        // catching edge-case of 12AM
        timeArr[0] = "00";
    } else if (AMPM === "PM") {
        // everything with PM can just be mod'd and added with 12 - the max will be 23
        timeArr[0] = (timeArr[0] % 12) + 12
    }
    console.log(timeArr.join(":"))
    return timeArr.join(":");