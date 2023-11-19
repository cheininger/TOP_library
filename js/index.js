const myLibrary = [
  (hp = new Book("Harry Potter", "J.K. Rowling", 123, true)),
  (th = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)),
];
const cardContainer = document.querySelector(".card-container");

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(name, author, pages, read) {
  newBook = new Book(name, author, pages, read);

  myLibrary.push(newBook);
}

function fillContainer() {
  myLibrary.forEach((book) => {
    const newCard = document.createElement("div");
    newCard.classList.add("book-card");

    cardContainer.appendChild(newCard);

    const title = document.createElement("h2");
    const author = document.createElement("h3");
    const pages = document.createElement("p");
    const read = document.createElement("p");

    title.textContent = book.name;
    author.textContent = book.author;
    pages.textContent = book.pages;

    if (book.read === true) {
      read.textContent = "Already read";
    } else if (book.read === false) {
      read.textContent = "Not read yet";
    }

    newCard.appendChild(title);
    newCard.appendChild(author);
    newCard.appendChild(pages);
    newCard.appendChild(read);
  });
}
