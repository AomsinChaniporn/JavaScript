function RemoveDuplicate(value){
    let x = [];
   
    value.forEach(value => {
        if(!x.includes(value)){ //includes เช็คว่ามีมั้ย
            x.push(value)  // push เอาเข้า
        }
    });
    return x; 
 }

    console.log(RemoveDuplicate([1,0,1,0]))
    console.log(RemoveDuplicate(["The","big","cat"]))
    console.log(RemoveDuplicate(["John","Taylor","John"]))