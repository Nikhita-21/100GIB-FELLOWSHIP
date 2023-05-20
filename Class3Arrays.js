//can contain different data types
let arr=[1,2,3,4,5,6];
console.log(arr)

let arr2=arr.toString();
console.log(arr2);

console.log("arr:"+typeof(arr),"arr2:"+typeof(arr2));

let c=arr.join("%");
console.log(c)

let d=arr.pop()//removes last index element
console.log(d,arr)

console.log(arr.length)

console.log(arr[3])

const fruits=['Banana','Apple','Kiwi'];
fruits.push("Orange");
console.log(fruits)

console.log(fruits.shift())//removing 0th index element
console.log(fruits)

fruits.unshift("Lemon")//adds element at the begining of array
console.log(fruits)

delete fruits[2]
console.log(fruits)

//concat
const girls=['tina','rina'];
const boys=['raj','sam'];
const children=girls.concat(boys);
console.log(children)

children.sort()
console.log(children);

children.splice(1,0,"ria","kia");//add at index 1 with out removing that ele
console.log(children);

//children.splice(1,1,"ria","kia");//add at index 1 with removing that ele
//console.log(children);

console.log(children.reverse());

