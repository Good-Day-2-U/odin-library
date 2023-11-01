


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages + " Pages";
  this.read = read;
  this.information = function() {
    return(`${this.title} by ${this.author}. ${this.pages}. Read: ${this.read}`)
  }
}


const TheHobbit = new Book('The Hobbit', 'J.R.R. Toilkin', 556, false)
const JensBookAboutFey = new Book('Fey Mist Kingdom', 'Casandra Clair', 7643, true)

console.log(TheHobbit.information())
console.log(JensBookAboutFey.information())

const myLibrary = [TheHobbit, JensBookAboutFey]

for (let i = 0; i < myLibrary.length; i++) {
  const newBook = document.createElement('Book' + i)
  const bookContent = document.createTextNode(myLibrary[i].information())
  newBook.appendChild(bookContent);
  newBook.classList.add('ImABook')
  const currentBook = document.getElementById('Book' + i)
  document.body.insertBefore(newBook, currentBook)
  const pdiv = document.querySelector('#content')
  pdiv.append(newBook)

}


function addBookToLibrary() {

}
