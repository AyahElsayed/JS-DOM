const search = document.getElementById('search-books');
const bookList = document.getElementById('book-list');

console.log(search, bookList);

// -------------------

const titles = document.getElementsByClassName('title');

console.log(Array.isArray(titles)); // false

// create an array from this html collection
console.log(Array.isArray(Array.from(titles))); // true

Array.from(titles).forEach(function (title) {
    console.log(title);
});

const lis = document.getElementsByTagName('li');
console.log(lis)