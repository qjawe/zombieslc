// What is a function
//
// var people = ["john", "luiog", "james", "Kingston"]
//
// for (var i = 0; i < people.length; i++)
//   console.log(">> " + people[i]);
//
//
// num.forEach(function(v, i)
// _____________________________________________________

// var people = ["john", "luiog", "james", "Kingston"]
//
// num2 = num.map(function(v) {
//   return (v +2);
// });
//
// console.log(num2);
// _____________________________________________________

// var num = [2, 3, 4, 5]
//
// num2 = num
// .map(function(v) {
//   return (v * 2)
// })
// .filter(function(v) {
//   return (v>=5)
// })
//
// console.log(num2);
// _____________________________________________________

// var people = ["john", "luiog", "james", "Kingston"]
// var num = [2, 3, 4, 5]
//
// num2 = num
// .map(function(v) {
//   return (v * 2)
// })
// .filter(function(v) {
//   return (v>=5)
// })
// .forEach(function(v) {
//   console.log("foreach: %d", v);
//
// })
//
// _____________________________________________________


// var num = [2, 3, 4, 5]
//
// var rand = function(give_num) {
//     give_num(Math.random());
// };
//
// rand(function(r_v) {
//     var idx = Math.round(r_v * people.length);
//     console.log(">>> %s", people[idx])
// })
//
//  _____________________________________________________


// var fred = {
//   name: "fred",
//   email: "fred@gmail.com",
//   greet:function() {
//     console.log("Hello my name is %s", this.name);
//     console.log("My email is %s", this.email);
//
//   }
// }
//
// var name = fred.name;
// var greet = fred.greet;
//
// fred.greet()
//
// console.log("Executing greet");
//  _____________________________________________________


var fred = {
     name: "fred",
     email: "fred@gmail.com",
     greet: function() {
         console.log("Hello my name is %s", this.name);
     }
 };

name = "BARNEY";

var greet = fred.greet;

fred.greet()
console.log("Executing greet")

greet();
fred.greet()
