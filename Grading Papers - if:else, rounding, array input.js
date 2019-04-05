
function gradingStudents(grades) {
    var len = grades.length
    var tempTable = []
    console.log(round5(67))
    for (var i = 0;i < len; i++){
        
        if (((round5(grades[i])) - grades[i] < 3) && (grades[i] >= 38)){
            console.log(round5(grades[i]))
            tempTable.push(round5(grades[i]))
        }else if (((round5(grades[i])) - grades[i] >= 3) && (grades[i] >= 38)){
            tempTable.push(grades[i])
        }else{
            tempTable.push(grades[i])
        }
    }
    return tempTable
    function round5(x)
    {
        return Math.ceil(x/5)*5;
    }

    console.log(tempTable)
}

var myGrade = [73,
    67,
    38,
    33]

gradingStudents(myGrade)