// @ts-check
console.log("---------------------------------------");
console.log("🚀 ~ Inheritance");
console.log("---------------------------------------");

/* ES2015 */
class ITBook extends Book {
  constructor(title, pages, isbn, technology) {
    super(title, pages, isbn);
    this.technology = technology;
  }

  printTechnology() {
    console.log("🚀 ~ ITBook ~ printTechnology ~ technology", this.technology);
  }
}

let jsBook = new ITBook(
  "Learning JS Algorithms",
  "200",
  "1234567890",
  "JavaScript"
);
console.log("🚀 ~ jsBook.title", jsBook.title);
console.log("🚀 ~ jsBook.printTechnology", jsBook.printTechnology());
