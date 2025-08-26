//เล่นหวย
// 096

function getFreqOfWords(sentenc) {
    if(sentenc === null || sentenc === undefined ){
        return undefined
    }
    const words = sentenc.toLowerCase().split(" ");
    const freq = {};
    for (let word of words) {
        if (word) {
            if(freq[word]) {
                freq[word]++;
            } else{
                freq[word] = 1;
            }

        }
    }
    return freq;
}
console.log(getFreqOfWords('Today is present and present is your gift'))
console.log(getFreqOfWords(null))
console.log(getFreqOfWords(undefined))


// 
function num(n1, n2) {
    return n1 + n2
}

const x = num
console.log(x(1, 2))
console.log(num(2, 3))
console.log(typeof(num))

//function expression (arrow syntax)
const num1 = () => a+b

const num2 = function(){ //ถ้ามี{}มันจะไม่ออโต้return
    return a+b
}

//functionที่มีparameterเป็นfunction

//เล่นหวย 096
function sum4() {
    return  2+3
}

function add(n) {
    return sum4() * n
}
console.log(add(3))




function sum5(a, b, fn) {
    const result = a + b;
    if (fn) {
        return fn(result); 
    }
    return result;
}

function add1(n) {
    return n * 2;
}

console.log(sum5(1, 3, add1)); 


function doSomething4(n1,n2) {
    const result = n1+n2
    return result
}
function doDo(number){
    const dd = doSomething4(3,4)+number
    return dd
}
console.log(doDo(6))


function test(x){
    return x
}
function test2(x){
    return x + 50
}
console.log(test(test2))
console.log(test(test2(10)))



function doSomrThing(a, b, ...c) {
    console.log(`length: $ {arguments.length}`)
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
    console.log(a, b, c)
}
doSomrThing(1, 2, 3, 5, 10, 15)




function sumAll() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sumAll(1, 2, 3, 4)); // 10
console.log(sumAll(5, 10));      // 15