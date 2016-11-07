/* eslint no-underscore-dangle: ["error", { "allow": ["_name", "_friends"] }] */

const evens = [0, 2, 4, 6, 8, 10];
const nums = [];
const odds = evens.map(v => v + 1);
// var nums = evens.map((v, i) => v + i);
evens.forEach((v) => {
  nums.push(v);
  nums.push(v + 1);
});
const pairs = evens.map(v => ({ even: v, odd: v + 1 }));

console.log(odds);
console.log(nums);
console.log(pairs);

// Statement bodies
const fives = [];
nums.forEach((v) => {
  if (v % 5 === 0) {
    fives.push(v);
  }
});

console.log(fives);

// Lexical this
const bob = {
  _name: 'Bob',
  _friends: ['foo', 'bar'],
  printFriends() {
    this._friends.forEach(f =>
      console.log(`${this._name} hnows ${f}`));
  }
};

bob.printFriends();


// es6 class


class Person {
  constructor(name, age) {
    this._name = name;
    this.age = age;
  }
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
  sayHi() {
    console.log(`Hello, my name is ${this._name}, and I am ${this.age} old.  Nice to meet you!`);
  }
  static robot() {
    return new Person('robot', 0);
  }
}

const bot = Person.robot();

bot.sayHi();

const person = new Person('John', 26);
person.sayHi();

class ProPerson extends Person {
  constructor(name, age, occupation) {
    super(name, age);
    this.occupation = occupation;
  }
  greeting() {
    super.sayHi();
    console.log(`I am working at ${this.occupation}`);
  }
}

const proPerson = new ProPerson('Sam', 30, 'Yahoo');

proPerson.greeting();


// Enhanced Object Literals

const handler = function handler() {
  console.log('this is handler');
};

const theProtoObj = 'super object';

const obj = {
  // __proto__
  __proto__: theProtoObj,
  // Shorthand for ‘handler: handler’
  handler,
  // Methods
  toString() {
    // Super calls
    return `d ${super.toString()}`;
  },
  // Computed (dynamic) property names
  [`prop_${(() => 42)()}`]: 42
};

console.log(obj.toString());

// Template Strings
// Basic literal string creation
console.log(`In JavaScript '\n' is a line-feed.`);

const name = 'Bob';
const time = 'today';
console.log(`Hello ${name}, how are you ${time}?`);
