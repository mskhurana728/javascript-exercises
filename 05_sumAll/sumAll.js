const sumAll = function(num1,num2) {
    let greaterNum;
    let smallerNum;
    let sum=0;
    //returns error for non-numbers
    if(typeof(num1)!="number" || typeof(num2)!="number" || num1<0 || num2<0){
        return "ERROR";
    }
    if (num1>num2){
        greaterNum=num1;
        smallerNum=num2;
    }else if(num2>num1){
        greaterNum=num2;
        smallerNum=num1;
    }else{
        return num1;
    }
    for(let i=smallerNum;i<=greaterNum;i++){
        sum +=i;
    }
return sum;

};

// Do not edit below this line
module.exports = sumAll;

//we have to make a function which take two arguments in the form of
//int we have to add all the integers between them including those two numbers
// we can do it by first
//which no is greater and than run the loop <= greater no and  then add smaller no by one every time