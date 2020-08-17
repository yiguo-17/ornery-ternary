function isHot(tem) {
  const hotOrNot = (tem>=80)?`Yes, it is indeed hot.`:`No, it is not hot.`
  return hotOrNot;
}


function helloThere(name) {
const greeting = (name.length>=6)? `Hi, ${name}` : `Hello, ${name}`;
return greeting
}


function goodbyeYou(name) {
const farewell = (name === undefined)? 'Goodbye, stranger' : `Goodbye, ${name}`;
return farewell
}


module.exports = {
  isHot,
  helloThere,
  goodbyeYou,
}