


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

const myLibrary = []

const delSelf = function deleteSelf(button, index) {
  const parentDiv = button.parentNode;
  parentDiv.remove();
  myLibrary.splice(index, 1); // Remove the book from the array
  updateLibrary(); // Update the library to reflect the changes
}

const updateLibrary = function() {
  const pdiv = document.querySelector('#content');
  const childDivs = pdiv.querySelectorAll('.ImABook');
  childDivs.forEach(div => {
    div.remove();
  });

  for (let i = 0; i < myLibrary.length; i++) {
    const newBook = document.createElement('div'); // Use 'div' instead of 'Book' + i
    const bookContent = document.createTextNode(myLibrary[i].information());
    const delButton = document.createElement('button');
    delButton.innerHTML = 'Delete';
    delButton.onclick = function() { delSelf(this, i); }; // Pass the index to the function
    newBook.appendChild(bookContent);
    newBook.appendChild(delButton);
    newBook.classList.add('ImABook');
    pdiv.appendChild(newBook);
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
