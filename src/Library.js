function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
}

function addBook(library, book) {
  return library.shelves[book.genre].push(book);
}

function checkoutBook(library, book, shelf) {
  var message = `You have now checked out ${book} from the ${library.name}`;
  for (let i = 0; i < library.shelves[shelf].length; i++) {
    if (book === library.shelves[shelf][i].title) {
      library.shelves[shelf].splice(i, 1);
      return message;
    }
  }
  return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
