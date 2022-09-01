function addnum(a,b){
    var c = a+b;
    console.log(c)
}
addnum(20,10);


// check prime or not

const checkPrime =function(p){
let prime = true;

for(let i=2; i<=p/2; i++){
    if(p%i ==0){
        console.log("not prime");
        prime = false;
        break;
    }
}
if(prime){
    console.log('prime');
}
}
checkPrime(115)
checkPrime(53)

// third method function() decleare

const sumProd=(x,y) =>{
    let a = x+y;
    let b = x*y;

    console.log(a,b);
    return [a,b];
}
const res =sumProd(10,25);
console.log(res);

