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

const list = document.querySelector('#book-list ul');

// delete books
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

