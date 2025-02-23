import { createRequire } from "module";
const require = createRequire(import.meta.url);
const books = require("../Exam-Unit-2/example_files/books.json");

function booksStartingWithThe() {
  let filteredBooks = [];
  for (let book of books) {
    if (book.title.toLowerCase().startsWith("the ")) {
      filteredBooks.push(book);
    }
  }
  return filteredBooks;
}

console.log(booksStartingWithThe(books));

function booksWithT() {
    return books.filter(book => book.title.toLowerCase().includes("t"));
}

console.log(booksWithT(books));

function booksWrittenAfter1992() {
    return books.filter(book => book.publication_year > 1992);
}

console.log(booksWrittenAfter1992(books));

function booksWrittenBefore2004() {

}

console.log(booksWrittenBefore2004(books));

function isbnNumberOfAuthor(authorName) {
    return books
        .filter(book => book.author.toLowerCase() === authorName.toLowerCase())
        .map(book => book.isbn);
}

console.log(isbnNumberOfAuthor("j.k.rowling"));

function alphabeticallyAscendingBooks() {
    return books.sort((a, b) => a.title.localeCompare(b.title));
}

console.log(alphabeticallyAscendingBooks(books));

function chronologicallyAscending() {
    return books.sort((a, b) => a.publication_year - b.publication_year);
}

console.log(chronologicallyAscending(books));

function booksByAuthorLastName(lastName) {
    return books.filter(book => {
        const authorLastName = book.author.split(' ').pop().toLowerCase();
        return authorLastName === lastName.toLowerCase();
    });
}

console.log(booksByAuthorLastName("rowling"));

function booksByAuthorFirstName(firstName) {
    return books.filter(book => {
        const authorFirstName = book.author.split(' ')[0].toLowerCase();
        return authorFirstName === firstName.toLowerCase();
    });
}

console.log(booksByAuthorFirstName("j.k."));