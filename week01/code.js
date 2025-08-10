/*
// create array with many data types
const a = [1, 'red', true, 'somtum']
//print array size 
console.log(a.length);
//print the frist item
console.log(a[0])
//print the last itme
console.log(a[a.length-1])
//add two more items at the end of array with object and 
// array data types respectively
a.push({color:'green', animal:'cat'})
a[a.length]=['pung', 'green'] 
console.log(a)
//print every items in array
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}
console.log(a.length)
// shrink size of array
a.pop();
console.log(a)
console.log(a.length)
 */

let x = [1, 2, 4]
let y = [1, ...x ,19]
console.log(y)

 

let a1 = new Array()
console.log(a1)
 
let a2 = new Array(5)
console.log(a2)
 
let a3 = new Array(1, 2, 3, 'pung')
console.log(a3)
 
const arr4=Array.of(5)
console.log(arr4)

 
const [a, b, ...c] = [5, 10, 15, 20, 25]
console.log(c)
console.log(typeof c)
 