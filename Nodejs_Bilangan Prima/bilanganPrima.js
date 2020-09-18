function isPrime(number) {
  for (var i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  
  return true;
}

function getPrimes(n) {
  var result = [];
  for (var i = 2; i < n; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }

  console.log(result);
}

getPrimes(10);