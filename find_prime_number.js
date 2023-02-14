

// Write code to print if n is a prime Number

// for example if n = 11, then its divisible only by 1 and 11 
// (Hint: only n%1 == 0 and n%11==0,  ) no other number can divide 11

// but if n = 12 then n%1 ==0 and n%2==0, n%3 == 0, n%4 == 0, n%6==0 hence its not a prime number

// Your code should work for any value of n

 




let a = 139;
let prime = a + " is a prime Number ";
let notprime = a + " is not a prime Number ";
if ((a % 1 === 0) & (1 % a === 0)) {
  console.log(prime);
} else {
  console.log(notprime);
}
