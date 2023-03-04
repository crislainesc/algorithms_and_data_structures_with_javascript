// @ts-check
console.log("---------------------------------------");
console.log("🚀 ~ Classes");
console.log("---------------------------------------");

/* 
Before ES2015 
function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}

Book.prototype.printTitle = function () {
  console.log("🚀 ~ this.title", this.title);
};
*/

/* ES2015 */
export default class Book {
  constructor(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }

  printIsbn() {
    console.log("🚀 ~ Book ~ printIsbn ~ isbn", this.isbn);
  }
}

let bookClass = new Book("title", "pag", "isbn");
console.log("🚀 ~ bookClass.title", bookClass.title);
bookClass.title = "new title";
console.log("🚀 ~ bookClass.title", bookClass.title);
