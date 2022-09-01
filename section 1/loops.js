/*for(let i=0; i<10; i++){
    console.log(i)
}

// third program
let i= 7
for(let i=7; i<100; i++){
    if(i%7==0)
    console.log(i)
}*/

// fourth program
let n = 49
r = Math.sqrt(n)
if(r == parseInt(r)){
   console.log("the perfect squre")
}
else{
    console.log("this is not perfect squre")
}

// fivth program
let num = 123456;
let rev = 0;
let lastDigit;

while(num != 0){
	lastDigit = num % 10;
  rev = rev * 10 + lastDigit;
  num = Math.floor(num/10);
}
console.log("Reverse number : "+rev);


// program to generate fibonacci series up to n terms
const number =10;
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
//while loop
while(num<10){
    console.log(num)
    num++;

}

console.log("...........................................")
//do while loop
let b =5
do{
    console.log(b)
    b++
}
while(b<10);

console.log(".............................................")
//perfect sequre 

for(let i=0;i<=1000;i++){
    let r = i**0.5;
    if(r==parseInt(r)){
        console.log(i)
    }
}