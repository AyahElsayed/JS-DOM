// const bookList = document.querySelector('#book-list');

// console.log('book list parent element:', bookList.parentElement.parentElement); // body
// console.log('book list parent node:', bookList.parentNode); // wrapper

// console.log('all node children:');
// Array.from(bookList.childNodes).forEach(function (node) {
//     console.log(node);
// });

// console.log('all element children:');
// Array.from(bookList.children).forEach(function (node) {
//     console.log(node);
// });

// const titles = bookList.querySelectorAll('.name');

// console.log('Book titles:');
// Array.from(titles).forEach(function (title) {
//     console.log(title.textContent);
// });

// ----------------

const bookList = document.querySelector('#book-list');

console.log('#book-list next sibling:', bookList.nextSibling);
console.log('#book-list next element sibling:', bookList.nextElementSibling);
console.log('#book-list previous sibling:', bookList.previousSibling);
console.log('#book-list previous element sibling:', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br />Too cool for everyone else!';

