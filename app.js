const search = document.getElementById('search-books');
const bookList = document.getElementById('book-list');

// console.log(search, bookList);

// -------------------

const titles = document.getElementsByClassName('title');

console.log(Array.isArray(titles)); // false

// create an array from this html collection
console.log(Array.isArray(Array.from(titles))); // true

Array.from(titles).forEach(function (title) {
    // console.log(title);
});

const lis = document.getElementsByTagName('li');
// console.log(lis)

// -------------------------------

const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

var books = document.querySelector('#book-list li .name');
// console.log(books);

books = document.querySelectorAll('#book-list li .name');
// console.log(books);

Array.from(books).forEach(function (book) {
    // console.log(book);
});
