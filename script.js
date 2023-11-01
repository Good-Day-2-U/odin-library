function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages + " Pages";
  this.read = read;
  this.information = function() {
    return(`${this.title} by ${this.author}. ${this.pages}. Read: ${this.read}`)
  }
}

function Reader(name) {
  this.name = name
}

Reader.prototype.sayName = function(name) {
  this.name = name
  console.log(`My name is ${this.name}`)
}


Object.setPrototypeOf(Book.prototype, Reader.prototype)


Book.prototype.chapterOn = function(chapter) {
  this.chapter = chapter
}



const Hbook = new Book("The Hobbit", "J.R.R. Tolkien", 554, false)

let t = Hbook.chapterOn(17)

const x = Hbook.sayName("Boobs")

console.log(Hbook.chapter)


console.log(Hbook.information())
console.log(Hbook.pages)




const Reader1 = new Reader("Brandon")