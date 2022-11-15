//Write a constructor for making “Book” objects. We will revisit this in the project at the end of this lesson. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.

// Put a function into the constructor that can report the book info like so: theHobbit.info() // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

// function Book(title, author, numberOfPages, readBook) {
//     this.title = title
//     this.author = author
//     this.numberOfPages = numberOfPages
//     readBook ? 'read' : 'not read yet'
//     this.info = function() {
//         console.log(`${title} by ${author}, ${numberOfPages} pages, ${readBook}`)
//     }
// }

// const Book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet')
// Book1.info() 

// All of the book objects are going to be stored in a simple array, 
// so function added to the script (not the constructor) 
// that can take user’s input and store the new book objects into an array.

let myLibrary = ["To Kill a Mockingbird", "The Giver", "Nineteen Eighty-Four", "Frankenstein"];

function Book(title, author, numberOfPages, readBook) {
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    readBook ? 'read' : 'not read yet'
    this.info = function () {
        console.log(`${title} by ${author}, ${numberOfPages} pages, ${readBook}`)
    }
}

function addBookToLibrary() {
    for(let i=0; i<myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
}


// Write a function that loops through the array and displays each book on the page.
