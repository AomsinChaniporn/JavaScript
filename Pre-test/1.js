function numberSplit (x){
    var array = [] ;
    if(x % 2 == 0 ){
        
        sum1 = Math.ceil(x/2);
        sum2 = Math.ceil(x/2);
        
        array.push(sum1);
        array.push(sum2);
        return array;
    }
    else {
        sum3 = Math.ceil(x/2)-1;
        sum4 = Math.ceil(x/2);

        array.push(sum3);
        array.push(sum4);
        return array;
    }
}
console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));