function FactorTractor(n) {
    const primeFactors = [];
    let Factor = 0;
  
    let i = 2;
    while (i <= n / i) {
      if (n % i === 0) {
        Factor = i;
        primeFactors.push(i)
        n /= i;
      } else {
        i++;
      }
    }
  
    if (Factor < n) Factor = n;
    primeFactors.push(n)
  
    return primeFactors;
  }
  
  console.log(FactorTractor(25));
  console.log(FactorTractor(19));
  console.log(FactorTractor(77));