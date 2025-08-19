/*
function calculateTotalPages(items, itemsPerPage) {
  if (items <= 0) {
    throw new Error('items per page must be greater than zero')
  }
  return Math.ceil(items/itemsPerPage)
} 

  


console.log(calculateTotalPages(10, 3)); // 4
console.log(calculateTotalPages(25, 5)); // 5
console.log(calculateTotalPages(0, 5));  // Error
console.log(calculateTotalPages(10, 10)); // 1
console.log(calculateTotalPages(10, 0));  // Error

*/



/*




// create object with literals
const obj = {id:123, id:333}
console.log(obj) // objectซ้อนobjectได้ แต่มันจะretunr value ตัวสุดท้าย อย่างข้อนี้จะretunr id:333

// object ซ้อน object
const a = {Nname:'fa',
   favorite:{id:222, color:'red'}
  }
console.log(a)


const pets ={
  cat: {
    name: 'black',
   // hello: function () {return'Hello'}
     hello(){return 'Hello'}  //โครงสร้างบบรทัด 32,33 เหมือนกัน
  }
}
console.log(pets.cat.name) // access name
console.log(pets.cat.hello()) //ต้องมีวงเล็บเพื่อเข้าถึงfunction

pets.dog={name:'ta'}
console.log(pets)

delete pets.dog
console.log(pets)


//constructor function
function favorite (animal, color,) {
 this.Nanimal = animal
 this.color = color
}
const a1 = new favorite ('cat', 'green')
const a2 = new favorite ('dog', 'red')
console.log(a1)
console.log(a2)


// class
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showInfo() {
    console.log(`name: ${this.name}, age: ${this.age}`);
  }
}

const s1 = new Student("nan", 20);
s1.showInfo(); 


//
/*
const person = { personId: 101, firstname: 'Somsak', lastname: 'Jaidee' }
const student = Object.create(person)
student.studentId = 651000101
console.log(person)//{ personId: 101, firstname: 'Somsak', lastname: 'Jaidee' }
console.log(student)//{ studentId: 651000101 }
*/
//

/*
// Object.create
//เล่นหวย
//096
const person = {
  greet() {
    console.log(`Hi i'm ${this.name}`);
  }
};

const user = Object.create(person);
user.name = "smith";

user.greet(); 

//
const per1 = { firstName: "Phakaphol", lastName: "Dherachaisuphakij", age: 20 }
console.log(per1.firstName) //object.property
console.log(per1["lastName"]) //object["property"]
//for...in (object)
for (const key in per1) {
  console.log(key)
  console.log(per1[key])
}

//
/*
function dosomething(){
  obj.name = 'xxx'
}
const pet = {id:1, name:'yoyo'}
console.log(pet.name)//yoyo
dosomething(pet)
console.log(pet.name)//xxx
*/

/*
function dosomething(){
  obj = {id:1, name:'yoyo'}
  obj.name = 'xxx'
}
const pet = {id:1, name:'yoyo'}


console.log(pet.name)//yoyo
dosomething(pet)
console.log(pet.name)//yoyo


*/



/*const std1 = { id: 1, name: "Somchai" }
create compareStudent function to compare two students 
if id and name are equally with incase sensitive then they are the same student, otherwise they are different.
has context menu
 */

/*

function compareStudent(std1, std2) {
  if (
    std1.id === std2.id && std1.name.toLowerCase() === std2.name.toLowerCase() 
  ) {
    return true
  }
   return false
}

const std1 = {id:1, name:'somchia'}
const std2 = {id:1, name:'somchia'}
console.log(compareStudent(std1, std2))
*/


const std1 = {id:1, name:'somchai', adress:{no:111, city:'Bangkok'}}
let {city:myAresss} = std1
const {adress: {city}} = std1
console.log(myAresss) //Bangkok


//homework

//shallow Equality
let book1 = {
  isbn: 123456789,
  title: "JavaScript",
}

let book2 = {
  isbn: 12345678,
  title: "JavaScript",
}



function shallowEquality (object1, object2) {
  const keys1=Object.keys(object1)
  const keys2=Object.keys(object2)
  
  if (keys1.length !== keys2.length){
    return false
  }
  for (let key of keys1){
    if(object1[key] !== object2[key]) {
      return false
    }
  }
  return true
}

console.log("shallow equality: " + shallowEquality(book1, book2))

/*
Shallow Equality จะตรวจสอบว่า object สองตัวมี key และค่าที่ตรงกันรึเปล่า โดยจะเปรียบเทียบเฉพาะในระดับชั้นแรกเท่านั้น 
ไม่ได้ตรวจสอบค่าที่ซ่อนอยู่ลึกๆ ภายใน object ซ้อนอีกชั้น
ขั้นตอนการทำงานของโค้ดคือ
-ดึง key ของ object ทั้งสองตัวออกมา
-ถ้าจำนวน key ไม่เท่ากัน ให้returnว่าไม่เท่ากัน
-ถ้าจำนวน key เท่ากัน ก็จะวนตรวจสอบว่า key แต่ละตัวมีค่าที่เหมือนกันรึเปล่า
-ถ้ามีค่าที่ต่างกันแม้แต่ key เดียว จะคืนค่าเป็น false
-ถ้าค่าเหมือนกันทั้งหมด จะคืนค่าเป็น true
ดังนั้น ถ้า object มีโครงสร้างเหมือนกันและค่าตรงกันทุก key ฟังก์ชันนี้ก็จะบอกว่า object เท่ากัน แต่ถ้า object มีการซ้อนกันหลายชั้น
 ฟังก์ชันนี้จะไม่ตรวจสอบลงไป ถือว่าเป็นการเปรียบเทียบแบบ "ตื้นๆ" เท่านั้น
 ปล.ใช้chatgptช่วยอธิบายโค้ด
*/

