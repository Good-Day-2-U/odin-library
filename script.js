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
  // this.sayName = function(name) {
  //   this.name = name
  //   console.log(`My name is ${this.name}`)
  // }
}

Reader.prototype.sayName = function() {
  console.log(`My name is ${this.name}`)
}




Object.setPrototypeOf(Book.prototype, Reader.prototype)


Book.prototype.chapterOn = function(chapter) {
  this.chapter = chapter
}



const Hbook = new Book("The Hobbit", "J.R.R. Tolkien", 554, false)

Hbook.name = 'Boobs'
// let t = Hbook.chapterOn(17)
// console.log(Hbook.chapter)

const x = Hbook.sayName()


console.log(Hbook.information())




const Reader1 = new Reader("Brandon")
Reader1.sayName('Brandon')