class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
    this.greetPatron = function(patronName, isMorning) {
      if (isMorning === true) {
        return `Good morning, ${patronName}!`
      }
      return `Hello, ${patronName}!`
    }
    this.findBook = function(bookTitle) {
      var allShelves = [].concat(
        this.library.shelves.fantasy,
        this.library.shelves.fiction,
        this.library.shelves.nonFiction
      );
      for (let i = 0; i < allShelves.length; i++) {
        if (allShelves[i].title === bookTitle) {
          //only works because there is only one book on the shelf
          this.library.shelves[allShelves[i].genre].splice(this.library.shelves[allShelves[i].genre].indexOf(bookTitle), 1);
          return `Yes, we have ${bookTitle}`;
        }
      }
      return `Sorry, we do not have ${bookTitle}`;
    }

    this.calculateLateFee = function(daysLate) {
      return Math.ceil(daysLate * .25);
    }
  }
}

module.exports = Librarian;
