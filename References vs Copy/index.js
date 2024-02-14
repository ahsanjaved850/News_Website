// start with strings, numbers and booleans

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
// const team = players;

// You might think we can just do something like this:
// team[3] = "ahsan";
// console.log(players);
// console.log(team);
// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
// const team3 = [];
// for (let i = 0; i < players.length; i++) {
//   team3[i] = players[i];
// }
// team3[3] = "ahsan";
// console.log(team3);
// console.log(players);
// // one way

// // or create a new array and concat the old one in
// const team = [].concat(players);
// // or use the new ES6 Spread
// const team4 = [...players];
// // now when we update it, the original one isn't changed
// const team5 = Array.from(players);
// // The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// and think we make a copy:
// const p2 = person;
// person.age = 99;
// console.log(p2);
// console.log(person);
// how do we take a copy instead?
// const p2 = Object.assign({}, person, { number: 99, age: 12 });
// console.log(p2);
// console.log(person);
// We will hopefully soon see the object ...spread
// const cap3 = {...person};
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
// const wes = {
//   name: "Wes",
//   age: 100,
//   social: {
//     twitter: "@wesbos",
//     facebook: "wesbos.developer",
//   },
// };

// console.clear();
// console.log(wes);

// const dev = Object.assign({}, wes);
// const dev2 = JSON.parse(JSON.stringify(wes));