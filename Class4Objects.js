//2 ways of creating obj
let obj={fname:'nikhita',lname:'gorantla',eyecolor:'black',age:19};

let obje=new Object();
obje.fname='hasini';
obje.lname='gorantla';
obje.eyecolor='black';
obje.age=17;

console.log(obj)
console.log(obje)
console.log(obj['fname'])// accessing the obj elements

//for in loop
let txt="";
for(let x in obje){
    txt+=obj[x];
}
console.log(txt);


//linked to new.html
function msg()
{
    let name=prompt("who are you?");
    alert('I don\'t care whosoever you are '+name);
}

function mousehover(){
    alert("you are hovering on me");
}