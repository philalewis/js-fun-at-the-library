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

var reviews = [];

function saveReview(review, reviews) {
  for (let i = 0; i < reviews.length; i++) {
    if (review === reviews[i]) {
      return;
    }
  }
  reviews.push(review);
  return reviews;
};


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
