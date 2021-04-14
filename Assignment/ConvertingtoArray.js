function ConvertingtoArray(obj) {
    const arr = Array.from(Object.keys(obj), k=>[`${k}`, obj[k]]);
  return(arr);
  }
  
console.log(ConvertingtoArray({ a: 1, b: 2 }));
console.log(ConvertingtoArray({ shrimp: 15, tots: 12 }));
console.log(ConvertingtoArray({}));