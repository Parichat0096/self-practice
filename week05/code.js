/*
//exercise
const stdSccores = [
    {name:'Alice', scores: 85}, 
    {name:'Bod', scores: 92}, 
    {name:'Charlie', scores: 68}, 
    {name:'David', scores: 55}, 
    {name:'Eve', scores: 78}, 
]


const passingName =
getpassingName(stdSccores)
console.log(passingName)

console.log(Array.isArray([])) //true
console.log(Array.isArray(['a', 12, false])) //true
console.log(Array.isArray(new Array(2))) //true

console.log(Array.isArray("[]")) //false
console.log(Array.isArray(123)) //false
console.log(Array.isArray(false))//false
console.log(Array.isArray("1")) //false
console.log(Array.isArray({})) //false

const num1 = [1,2,3]
const num2 = [3,5,7]
console.log([...num1,...num2])
console.log(num1.concat(num2))

console.log(num1.toString()) // defalftจะเป็น,คั่น
console.log(num1.join("."))
console.log(num1.join(" "))
console.log(num1.join(","))
console.log(num1.join(":"))



console.log("mangoteen".includes("go")) //true
console.log(["mangoteen", "mango"].includes("go")) //true

//096 เล่นหวย
const array14 = [1, 30, 4, 21, 100000]
array14.sort((a, b) => b - a) //ถ้าbมากกว่าให้เอาbไว้ข้างหน้า 
                              //แต่ถ้าอยากเรียงจากน้อยไปมากคือ (a, b) => a - b คือถ้าa>ให้เอาaขึ้นก่อน
                              ////แบบนี้จะใช้กับพวกเรียงแบบnumberic
console.log(`array14: ${array14}`)

const students = [
{id: 66500102, name: "Suda", gpa: 2.5 },
{id: 66500555, name: "ada", gpa: 2.8 },
{id: 66500589, name: "pornchai", gpa: 3.25},
{id: 66500102, name: "Pornsak" , gpa: 3.8 }
]
students.sort((a, b)=> a.name.localeCompare(b.name)) ////แบบนี้จะเป็นแบบพวกภาษาหรืออักษรพิเคษหรือก็คือstring
                                                     //localeCompare defaltไม่สนใจcase sensitive
console.log(students)
*/