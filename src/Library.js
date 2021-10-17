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

function checkoutBook(library, book, shelf) {
  var message = `You have now checked out ${book} from the ${library.name}`;
  if (library.shelves.shelf.includes(book.title)) {
    return message;
  }
  return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
}
// for (let i = 0; i < library.shelves[shelf].length; i++) {
//   if (book === library.shelves.shelf[i].title) {
//     library.shelves[shelf].splice(i, 1);
//     return message;
//   }
// }

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
