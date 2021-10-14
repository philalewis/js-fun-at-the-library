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
      return;
    }
  }
  reviews.push(review);
  return reviews;
};

function calculatePageCount(title, pageCount) {
  return title.length * 20;
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}
