const removeFromArray = function(arr,...removeElement) {

console.log(removeElement+"hello");

for(let j=0;j<removeElement.length;j++){

    for(let i=0;i<arr.length;i++){

        if(arr[i]===removeElement[j]){
            arr.splice(i,1);
        }

    }
}
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;


//we have t0 make a function which will remove elemnts from 
//array this function will take array from which we have to 
//remove elements and the other elemnts themselves we don't 
//know the exact amount of arguments it can be one two or many


// as per google we can use splice function splice(index,how many elements) to remove elements
//


