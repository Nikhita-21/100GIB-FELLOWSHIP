// npm install prompt-sync
const prompt = require("prompt-sync")({sigint:true});
let n=prompt("enter the number:");
console.log(n);
for(let i=1;i<=n;i++){
    console.log(i);
}


console.log(+"200")
console.log(+"hello")
console.log(+false)
console.log(+true)

console.log(20+56)

const score=20;
const rating= score<40 ? "poor":"excellent";
console.log(rating)

for(let i=1;i<=100;i++)
{
    const result = (i%3==0 && i%5==0)?"fizzbuzz": (i%3==0?"fizz":(i%5==0?"buzz":i)); 
    console.log(result);
}

for(let i=1;i<=100;i++)
{
    const res= (i%3==0)?(i%5==0?"fizzbuzz":"fizz"):(i%5==0?"buzz":i);
    console.log(res);
}

//strings
let name="nikhita";
for(let i=0;i<name.length;i++)
{
    console.log(name[i]);
}

//string interpolation
let lastname="thomas";
const des=`hello mr.john${lastname} you have lost your phone.Please pick the phone at police station mr.john${lastname}`
console.log(des);

//escape sequence
const descri="it my mumma\'s phone";
console.log(descri);

//string convertions
var fname="Nikhita";
console.log(fname.toLowerCase())
console.log(fname.toUpperCase())

//string slicing
var names="Lalitha Hasini";
var s1=names.slice(0,7);
var s2=names.slice(7);
console.log(s1);
console.log(s2);
var s3=names.replace("Hasini",'Honey')
console.log(s3)

//Functions
function cube(num)
{
    return num*num*num;
    //console.log(num*num*num);
}
console.log(cube(3))
//var s=cube(4);
//console.log(s);

//using callfunction
function product(a,b)
{
    return a*b;
    //console.log(a*b);
}
var p=product.call(this,4,3);
console.log(p)

//Arrow Functions
let prod=(a,b)=> {return a*b}
console.log(prod(3,4))

let square= a=> console.log(a*a);
square(5);