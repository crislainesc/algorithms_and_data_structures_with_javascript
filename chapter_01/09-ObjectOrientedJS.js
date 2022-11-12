console.log("---------------------------------------");
console.log("🚀 ~ Object Oriented Programming");
console.log("---------------------------------------");

var obj = new Object();

var obj = {};

obj = {
  name: {
    first: "Gandalf",
    lat: "the Grey",
  },
  address: "Middle Earth",
};

function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;

  this.printIsbn = function () {
    console.log("🚀 ~ this.isbn", this.isbn);
  };
}

var book = new Book("title", "pag", "isbn");
console.log("🚀 ~ book", book);

console.log("🚀 ~ book.title", book.title);
book.title = "new Title";
console.log("🚀 ~ book.title", book.title);

Book.prototype.printTitle = function () {
  console.log("🚀 ~ this.title", this.title);
};

book.printTitle();
book.printIsbn();
