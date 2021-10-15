function shelfBook(book, shelf) {
  var sciFiShelf = [];
  if (book.genre === 'sciFi') {
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
