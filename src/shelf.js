function shelfBook(book, shelf) {
  var sciFiShelf = [];
  if (book.genre === 'sciFi' && shelf.length < 3) {
    shelf.unshift(book);
  }
  return shelf;
}

module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};
