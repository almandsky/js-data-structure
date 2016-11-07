/* eslint no-underscore-dangle: ["error", { "allow": ["_name"] }] */

class Book {
  constructor(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }
  printIsbn() {
    console.log(this.isbn);
  }
}

const book = new Book('title', 'pag', 'isbn');

console.log(book.title); // outputs the book title

book.title = 'new title'; // update the value of the book title

console.log(book.title); // outputs the book title


// inheritance
class ITBook extends Book {

  constructor(title, pages, isbn, technology) {
    super(title, pages, isbn);
    this.technology = technology;
  }

  printTechnology() {
    console.log(this.technology);
  }
}

const jsBook = new ITBook('Learning JS Algorithms', '200', '1234567890', 'JavaScript');

console.log(jsBook.title);
console.log(jsBook.printTechnology());
console.log('getter and setters');
// getter and setters
class Person {

  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

const lotrChar = new Person('Frodo');
console.log(lotrChar.name);
lotrChar.name = 'Gandalf';
console.log(lotrChar.name);

lotrChar._name = 'Sam';
console.log(lotrChar.name);


// using symbols for private atributes

const _name = Symbol('foo');
class Person2 {

  constructor(name) {
    this[_name] = name;
  }

  get name() {
    return this[_name];
  }

  set name(value) {
    this[_name] = value;
  }
}

const lotrChar2 = new Person2('Frodo');
console.log(lotrChar2.name);
lotrChar2._name = 'Gandalf';
console.log(lotrChar2.name);

console.log(Object.getOwnPropertySymbols(lotrChar2));
