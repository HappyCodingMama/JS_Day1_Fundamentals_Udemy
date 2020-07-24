// 001 - to display alert box
// alert('Hello world');

//002 - var, let, const
/* var: can be re-declared and updated & globally scoped
var greeter = 'hello';
var times = 4;

if (times > 3) {
  var greeter = 'bye';
}

console.log(greeter); */

// let: can be updated but not re-declared & block scoped
/* let greeting = 'hello'
if (true) {
  let greeting = 'bye'
  console.log(greeting);
}

console.log(greeting);
*/

// const: cannot be updated or re-declared & block scoped

// const greeting = {
//   message: 'hello',
//   times: 4
// }

// console.log(greeting.message);

//004. type conversion

// let val;

//number to string, boolean to string, date to string, array to string

// val = 5;
// val = (5).toString();
// val = ('star').toString();

// val = '7.3245';
// val = Number('7.3245');

// val = (true).toString();
// val = new Date();
// val = String(new Date());
// val = (new Date()).toString();

// val = [0, 11, 22, 33, 44, 55];
// val = String([0, 11, 22, 33, 44, 55]);

//string to number
// val = Number(null);
// val = Number(true);
// val = Number(false);
// val = 100.4567889;
// // val = parseInt(val);
// val = parseFloat(val);

// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(2));

//005.number & the math
// const num1 = 15;
// const num2 = 76;

// val = num1 + num2;
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.72345234);
// val = Math.random();

// console.log(val);
// console.log(val.toFixed(2));

//006.string Method & Concatenation
const firstName = 'Jaeene';
const lastName = 'Eyre';
const str = 'apple is my favorite color';

// let val;
// val = firstName + ' ' + lastName;

// val = 'Jane';
// val += 'Eyre';

// val = firstName.concat(' ', lastName);

// val = val.toUpperCase();

// val = firstName.indexOf('e');

// val = firstName[3];

// val = firstName.charAt('0');

// val = firstName.charAt(firstName.length - 1);

val = str.replace('color', 'fruit');

console.log(val);









