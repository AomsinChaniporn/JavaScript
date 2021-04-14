function Persistence(num,step = 0){
    const data = num.toString().split('').map((i)=>parseInt(i));
    if(data.length > 1){
        const sum = data.reduce((a,b)=> a+b);
        step++;
        Persistence(sum,step);
    }
    else {
      console.log(step);
    }
}

Persistence(1679583);
Persistence(123456);
Persistence(6);