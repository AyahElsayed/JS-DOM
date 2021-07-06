// const listItems = document.querySelectorAll('#book-list ul li');

// Array.from(listItems).forEach(function (item) {
//     item.addEventListener('click', (e) => {

//         const li = e.target.parentElement;
//         console.log('child element to remove:', li);
//         console.log('parent element to remove child from:', li.parentElement);
//         li.parentNode.removeChild(li);

//     });
// });

// prevent default behaviour

// const link = document.querySelector('#page-banner a');

// link.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('Navigation to', e.target.textContent, 'was prevented');
// });

// ----------------------------
//  Event Bubbling
// attach every event Listener to every button

document.addEventListener('DOMContentLoaded', function () {

  const list = document.querySelector('#book-list ul');

  // delete books
  list.addEventListener('click', (e) => {
    if (e.target.className == 'delete') {
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });

  // -----------Forms-----------

  const forms = document.forms;
  console.log(forms);
  console.log(forms['add-book']);

  Array.from(forms).forEach(function (form) {
    console.log(form);
  });

  const addForm = forms['add-book'];
  addForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // create elements
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add text content
    bookName.textContent = value;
    deleteBtn.textContent = 'delete';

    // add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    // append to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    // list.insertBefore(li, list.querySelector('li:first-child'));

  });

  // hide books
  const hideBox = document.querySelector('#hide');
  hideBox.addEventListener('change', function (e) {
    if (hideBox.checked) {
      list.style.display = "none";
    } else {
      list.style.display = "initial";
    }
  });

  // filter books
  const searchBar = forms['search-books'].querySelector('input');
  searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach((book) => {
      const title = book.firstElementChild.textContent;
      if (title.toLowerCase().indexOf(e.target.value) != -1) {
        book.style.display = 'block';
      } else {
        book.style.display = 'none';
      }
    });
  });


  // tabbed content
  const tabs = document.querySelector('.tabs');
  const panels = document.querySelectorAll('.panel');
  tabs.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
      const targetPanel = document.querySelector(e.target.dataset.target);
      Array.from(panels).forEach((panel) => {
        if (panel == targetPanel) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    }
  });

});
