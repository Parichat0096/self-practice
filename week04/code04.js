/*
//ปรับแก้arrต้นฉบับ
const words = ['apple', 'mango', 'orange', 'banana']
//words.reverse()
//console.log(words)


// how to write callbackf syntax 
//1. anonymous arrow f. =ต้องการอ้างถึงแค่ครั้งเดียว
//const starWords= words.filter((word)=> word.startsWith("a")) //callback ทำงานตาม จน.word
//console.log(starWords)

//2. anonymous f declaration
//const starWords1= words.filter(function (word) {
 //   return word.startsWith("a")
//})
//console.log(starWords1)

//3.n arrow f แบบมีชื่อ เรียกได้มากกว่า1ครั้ง
// const checkStartA = (word) => word.startsWith("a")
// const startAwords2 = words.filter(checkStartA)
// console.log(startAwords2)


//4. named function declaration
// function checkStartA2(word) {
//   return word.startsWith("a")
// }
// const startAwords3 = words.filter(checkStartA2)
// console.log(startAwords3)

//เอาให้ได้แบบข้อ1แต่่ใช้foreachแทน


const starWords= words.forEach((word)=> word.startsWith("a")) 
console.log(starWords)

const startAWords = [];
words.forEach(word => {
    if(word.startsWith('a')) {
        startAWords.push(word);
    }
});
console.log(startAWords);



const employees = [
  {
    id: "e1001",
    firstname: "Somchai",
    lastname: "Jaidee",
  },
  {
    id: "e1002",
    firstname: "Pornchai",
    lastname: "Deejai",
  },
  {
    id: "e1005",
    firstname: "Suda",
    lastname: "Rakdee",
  },
]
// 
const map1 = employees.map(employee => employee.firstname.toUpperCase()+" "+
employee.lastname.toUpperCase());
console.log(map1)

//ต้องการแค่ผลลัพธ์ที่มีคำว่าjai
const map2 = map1.filter(map => map.includes("JAI"))
console.log(map2)



const carts = [
  { productId: 1002, price: 10, amount: 5 },
  { productId: 2005, price: 100, amount: 2 },
  { productId: 5001, price: 5, amount: 4 },
]
//net price = total price * VAT 7%


 //
 const totalPrice =carts.reduce((total, product) => {
    return total+ (product.price * product.amount)
 },0)
const netPrice = totalPrice * 1.07
console.log(netPrice.toFixed(2))



const nums = [2, 4, 6]
// nums[nums.length] = 8
console.log(nums.push(8)) //append in the end of array, return new length
console.log(nums)
nums.unshift(10) //add in the beginning of array
console.log(nums)
nums.pop() //remove in the end of array
console.log(nums)
nums.shift() //remove in the beginning of array
console.log(nums)


const words = ["apple", "orange", "banana"]
//add 'cherry', 'berry' after 'orange'
words.splice(2, 0, "cherry", "berry")
console.log(words) //[ 'apple', 'orange', 'cherry', 'berry', 'banana' ]
//delete 'cherry'
words.splice(2, 1)
console.log(words) //[ 'apple', 'orange', 'berry', 'banana' ]
//replace 'berry' with 'mango'
words.splice(2, 1, "mango")
console.log(words) //[ 'apple', 'orange', 'mango', 'banana' ]
 


const words = ["apple", "orange", "banana", "mango", "cherry"]

console.log(words.slice(1)) // ["orange", "banana", "mango", "cherry"]
console.log(words.slice(0, 3)) //["apple", "orange", "banana"]
console.log(words.slice(2, 5)) // ["banana", "mango", "cherry"]
console.log(words.slice(2)) // ["banana", "mango", "cherry"]
console.log(words.slice(-3)) // ["banana", "mango", "cherry"]
 



*/