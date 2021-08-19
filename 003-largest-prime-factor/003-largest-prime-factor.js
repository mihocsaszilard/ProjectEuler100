export function largestPrimeFactor(number) {
  let a = [];
  for (var j = 0; j < number; j++) {
    if (isPrime(j) && number % j == 0) a.push(j);
  }
  if (number >= 8)
  return a[a.length - 1];
  else return number;
}

function isPrime(number) {
  for (var i = 2; i < number; i++) if (number % i === 0) return false;
  return number > 1;
}

largestPrimeFactor(2);