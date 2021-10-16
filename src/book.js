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

function saveReview(newReview, reviews) {
  for (let i = 0; i < reviews.length; i++) {
    if (newReview === reviews[i]) {
      return reviews;
    }
  }
  reviews.push(newReview);
  return reviews;
};

function calculatePageCount(title) {
  return title.length * 20;
};

function writeBook(title, character, genre) {
  book = {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
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
