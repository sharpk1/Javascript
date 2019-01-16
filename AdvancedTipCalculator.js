
console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");


var johnTips = [];
var johnTotals =[];

var john = {

    bills: [124, 48, 268, 180, 42],
    calcTip: function(bill){
        var tip;
        var total;
        for (i = 0; i < bill.length; i++){
            if (bill[i] < 50){
                tip = bill[i] * 0.2;
                total = tip + bill[i];
                johnTips.push(tip);
                johnTotals.push(total);
            }else if (bill[i] >= 50 && bill[i] <= 200){
                tip = bill[i] * 0.15;
                total = tip + bill[i];
                johnTips.push(tip);
                johnTotals.push(total);
            }else if (bill[i] > 200){
                tip = bill[i] * 0.15;
                total = tip + bill[i];
                johnTips.push(tip);
                johnTotals.push(total);
            }
                        
        }
        return johnTips;
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

john.calcTip(john.bills);
john.calcAverage(johnTips);
console.log("John's tip average is " + john.average);
//console.log(john.calcAverage(johnTips));
console.log("John's tips are " + johnTips);
console.log("John's totals are " + johnTotals);


var markTips = []
var markTotals = []

var mark = {

    bills: [77, 375, 110, 45],
    calcTip: function(bill){
        var tip;
        var total;
        for (i = 0; i < bill.length; i++){
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

if (john.average > mark.average){
    console.log("John paid more than Mark in tips");
}else if (mark.average > john.average){
    console.log("Mark paid more than John in tips");
}else{
    console.log("These two gentlemen paid the same amount in tips");
}