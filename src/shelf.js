function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
  return shelf;
}

function unshelfBook(bookTitle, shelf) {
  for (let i = 0; i < shelf.length; i++) {
    if (bookTitle === shelf[i].title) {
      shelf.splice(i, 1);
    }
  }
  return shelf;
}

function listTitles(shelf) {
  var titleList = '';
  for (let i = 0; i < shelf.length; i++) {
      if (titleList === '') {
        titleList += shelf[i].title;
      } else {
        titleList += ', ' + shelf[i].title;
      }
  }
  return titleList;
}

function searchShelf(shelf, title) {
  for (let i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      return true;
    }
  }
  return false;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
