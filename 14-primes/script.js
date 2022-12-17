/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 *
*/

function primes(num) {
  function isPrime(n) {
    if (n > 1) {
      for (let i = 2; i < n; i++)
        if (n % i === 0) {
          return false;
        }
      return true;}
    else {
      return false;
    }
  }
  let prime = [];
  for (let j = 2; j <= num; j++){
    if (isPrime(j)) prime.push(j);
  }
  return prime;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]
