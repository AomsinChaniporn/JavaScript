function MissingNumber(arr) {
    for(i =1;i<=arr.length+1;i++){
        if(arr.indexOf(i)===-1){
            return i;
        }
    }
}

console.log(MissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(MissingNumber([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log (MissingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9]));