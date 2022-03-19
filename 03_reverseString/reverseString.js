const reverseString = function(string) {
    let reversedString="";
    let i = 0;
    // console.log(string.length);
    // console.log(string.charAt[string.length -1]);
    for(i=0;i<string.length;i++){

        reversedString += string.charAt(string.length-1 -i);


    }
    return reversedString;

};



// Do not edit below this line
module.exports = reverseString;
