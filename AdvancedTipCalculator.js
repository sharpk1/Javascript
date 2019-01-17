// declaring the empty lists signified for John's tips and totals  
var johnTips = [];
var johnTotals =[];

//creating the John object comprised of properties and functions
var john = {

    bills: [124, 48, 268, 180, 42],
    calcTip: function(bill){
        var tip;
        var total;
        for (i = 0; i < bill.length; i++){
            if (bill[i] < 50){ //if the bill was below $50, calculate the tip as 20%
                tip = bill[i] * 0.2;
                total = tip + bill[i];
                johnTips.push(tip);
                johnTotals.push(total);
            }else if (bill[i] >= 50 && bill[i] <= 200){ //if the bill was between $50 and $200, calculate the tip as 15%
                tip = bill[i] * 0.15;
                total = tip + bill[i];
                johnTips.push(tip);
                johnTotals.push(total);
            }else if (bill[i] > 200){ //if the bill was above $200, calculate the tip as 10%
                tip = bill[i] * 0.15;
                total = tip + bill[i];
                johnTips.push(tip); //append to tips list
                johnTotals.push(total); //append total to totals list
            }
                        
        }
        return johnTips;
    },
    calcAverage: function(tip){ //calculating the average of tips
        var sum = 0;
        var average;
        for (i = 0; i < tip.length; i++){
            sum = sum + tip[i]
            average = sum / tip.length;
            
        }
        this.average = average; //declaring a new property in the John object
        return average;
    }

}

john.calcTip(john.bills); // calculate the tip and using john.bills as argument passed in
john.calcAverage(johnTips); // calculate the average of the tips, using the tips list passed in
console.log("John's tip average is " + john.average);
//console.log(john.calcAverage(johnTips));
console.log("John's tips are " + johnTips);
console.log("John's totals are " + johnTotals);

// declaring the empty lists signified for Mark's tips and totals  
var markTips = []
var markTotals = []

var mark = {

    bills: [77, 375, 110, 45], // Mark's list of restaurant bills 
    calcTip: function(bill){
        var tip;
        var total;
        for (i = 0; i < bill.length; i++){ // Mark has different rules than John on how he tips. Same function as John regardless
            if (bill[i] < 100){
                tip = bill[i] * 0.2;
                total = tip + bill[i];
                markTips.push(tip);
                markTotals.push(total);
            }else if (bill[i] >= 100 && bill[i] <= 300){
                tip = bill[i] * 0.1;
                total = tip + bill[i];
                markTips.push(tip);
                markTotals.push(total);
            }else if (bill[i] > 300){
                tip = bill[i] * 0.25;
                total = tip + bill[i];
                markTips.push(tip);
                markTotals.push(total);
            }
                        
        }
        return markTips;
    },
    calcAverage: function(tip){
        var sum = 0;
        var average;
        for (i = 0; i < tip.length; i++){
            sum = sum + tip[i]
            average = sum / tip.length;
            
        }
        this.average = average;
        return average;
    }

}

mark.calcTip(mark.bills);
mark.calcAverage(markTips);
console.log("Mark's tip average is " + mark.average);
console.log("Mark's tips are " + markTips);
console.log("Mark's totals are " + markTotals);


// comparing the averages of john vs mark
if (john.average > mark.average){ 
    console.log("John paid more than Mark in tips");
}else if (mark.average > john.average){
    console.log("Mark paid more than John in tips");
}else{
    console.log("These two gentlemen paid the same amount in tips");
}
