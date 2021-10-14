function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns
  };
  return character;
}

function saveReview(review, reviews) {
  for (let i = 0; i < reviews.length; i++) {
    if (review === reviews[i]) {
      return reviews;
    }
  }
  reviews.push(review);
  return reviews;
};

function calculatePageCount(title, pageCount) {
  return title.length * 20;
};

function writeBook(bookTitle, bookCharacter, genre) {
  book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  }
  return book;
};

function editBook(book) {
  return book.pageCount *= .75;
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
