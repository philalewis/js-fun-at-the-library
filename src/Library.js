function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
  return library;
}

function addBook(library, book) {
  library.shelves[book.genre].push(book);
}

function checkoutBook(library, book, genre) {
  library.shelves.genre.pop()
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
