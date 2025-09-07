/*
function echo(msg) {
  return msg
}
function getLength(str) {
  return str.length
}
const GPAAverage = 3.0
class Book {
  constructor(isbn) {
    this.isbn = isbn
  }
}
//module.exports = { echo, getLength, GPA: GPAAverage, Book }
//object syntax //{echo:echo, getLength:getLength, GPA: GPAAverage}
*/

//name export
export function echo(msg) {
  return msg
}

//default export
export function getLength(str) {
  return str.length
}
const GPAAverage = 3.0
class Book {
  constructor(isbn) {
    this.isbn = isbn
  }
}