function highestDigit(x){
    let a = x.toString().split('');
return Math.max.apply(null,a);
}
console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));