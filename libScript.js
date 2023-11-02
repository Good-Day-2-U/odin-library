


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages + " Pages";
  this.read = read;
  this.information = function() {
    return(`${this.title} by ${this.author}. ${this.pages}. Read: ${this.read}`)
  }
}


// const TheHobbit = new Book('The Hobbit', 'J.R.R. Toilkin', 556, false)
// const JensBookAboutFey = new Book('Fey Mist Kingdom', 'Casandra Clair', 7643, true)

// console.log(TheHobbit.information())
// console.log(JensBookAboutFey.information())
const delSelf = function deleteSelf(button) {
  let parentDiv = button.parentNode
  parentDiv.remove();
}


let myLibrary = []

const updateLibrary = function()
  {
    const pdiv = document.querySelector('#content')
    const childDivs = pdiv.querySelectorAll('.ImABook')
    childDivs.forEach(div => {
      div.remove();
    })

    for (let i = 0; i < myLibrary.length; i++) {
      const newBook = document.createElement('Book' + i)
      const bookContent = document.createTextNode(myLibrary[i].information())
      const delButton = document.createElement('Button')
      delButton.innerHTML = 'Delete'
      delButton.onclick = function() {delSelf(this);};
      newBook.appendChild(bookContent);
      newBook.appendChild(delButton);
      newBook.classList.add('ImABook')
      const currentBook = document.getElementById('Book' + i)
      document.body.insertBefore(newBook, currentBook)
      // const pdiv = document.querySelector('#content')
      pdiv.append(newBook)
    }
}


function addBookToLibrary() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read;
  if (document.querySelector('#true').checked == true) {
    read = true
  } else {
    read = false
  }
  let newestBook = new Book(title, author, pages, read)
  myLibrary.push(newestBook)
  console.log(myLibrary)
  updateLibrary()
  document.querySelector('#title').value = ''
  document.querySelector('#author').value = ''
  document.querySelector('#pages').value = ''
}

// updateLibrary()
