function RemoveDuplicates(name){
    let x = [];
    name.forEach(value=>{ 
        if(!x.includes(value)){ 
            x.push(value) 
        }
    });
    return x;
 }
 
console.log(RemoveDuplicates([1,0,1,0]))
console.log(RemoveDuplicates(["The","big","cat"]))
console.log(RemoveDuplicates(["John","Taylor","John"]))