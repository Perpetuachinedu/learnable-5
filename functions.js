  /*craete a function that will be able to convert figures from Fahrenheit to Celsius*/
  function convertFahrenheit(F){
    let celsius = (5/9) * (F -32);
    console.log(`${celsius}`);
  }
  //Enter the fahrenheit value to be converted to celsius in the round bracket
  convertFahrenheit(70);
  
  /*create a function that will calculate the average of numbers in an array*/
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  
  function calculateAverage(){
    let sum = num.reduce((accumulator, currentValue) => {return accumulator + currentValue},0);
    let count = 10;
    return sum / count;
  }
  console.log(calculateAverage());
  
  /*create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.*/
  
  function checkDivisibility(n, x, y){if (n /x && n /y) {
    console.log('Yes');
  } else{
    console.log('No');
  }
  }
  //input value of n,x and y respectively in the round bracket to check if it is divisible.
  checkDivisibility(0, 4, 2);
  
  /*Create a function that will output the first 100 prime numbers*/
  
  
  function getPrimeNumbers(max) {
  let store = [], i, j, primes = [];
  for(i=2; i<=max; ++i)
  {
    if(!store [i])
    {
      primes.push(i);
      for (j = i << 1; j <=max; j +=i)
      {
      store[j] = true; 
      }
    }
  }
  return primes;
  }
  console.log(getPrimeNumbers(100));
  
  /*Create a function that will return a boolean specifying if a number is a prime number*/
  
  function isPrime(n){
    if (n===1)
    {
      return false;
    } else if(n===2)
    {
      return true;
    } else {
      for (var x = 2; x <n; x++)
      {
        if(n % x === 0)
        {
          return false;
        }
      }
      return true;
    }
  }
  console.log(isPrime(2));
  
  /*create a function that recieves an array of numbers and returns an array of only positive numbers*/
  
  function getPositives(){
    let numArr = [-5, 20, -8, 9, 12, -7, 6, 74, 11, -7, 63, 0, 1];
  const getPositiveNumbers = (numArr) => numArr.filter(x => x >0);
  let positives = getPositiveNumbers(numArr);
  console.log(positives);
  }
  getPositives();

  /*Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz"*/

  function fizzBuzz(num){
    let numArr = [];
    for(let i = 1; i <= num; i++){
      if(i % 3 == 0) {
        numArr.push("Fizz");
      }else if(i % 5 == 0){
        numArr.push("Buzz");
      } else if(i % 3 == 0 && i % 5 == 0){
        numArr.push("FizzBuzz");
      }else {numArr.push(i)}
    }

    return numArr;
  }
  console.log(fizzBuzz(100));