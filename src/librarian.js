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
      for (let i = 0; i < this.library.shelves.fantasy.length; i++) {
        if (this.library.shelves.fantasy[i].title === bookTitle) {
          this.library.shelves.fantasy.splice(i, 1);
          return `Yes, we have ${bookTitle}`
        }
      }
      for (let i = 0; i < this.library.shelves.fiction.length; i++) {
        if (this.library.shelves.fiction[i].title === bookTitle) {
          this.library.shelves.fiction.splice(i, 1);
          return `Yes, we have ${bookTitle}`
        }
      }
      for (let i = 0; i < this.library.shelves.nonFiction.length; i++) {
        if (this.library.shelves.nonFiction[i].title === bookTitle) {
          this.library.shelves.nonFiction.splice(i, 1);
          return `Yes, we have ${bookTitle}`
        }
      }
      return `Sorry, we do not have ${bookTitle}`
    }
    this.calculateLateFee = function(daysLate) {
      return Math.ceil(daysLate * .25);
    }
  }
}

module.exports = Librarian;
