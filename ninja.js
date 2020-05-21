document.addEventListener('DOMContenetLoaded', function(){
//delete books
const list = document.querySelector('#book-list ul');
list.addEventListener('click', function(e){
    if (e.targer.className == 'delete')  {//return class name of the element
    const li = e.target.parentElement;
    list.removeChild(li); //removes listed items after delete click
}
});

//add book list
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type='text']').value //specific type in brackets //grab value of input field

    //create elements

    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    //add classes
    bookName.classList.add('name'); //add class of name
    deleteBtn.classList.add('delete'); //add class of delete
    
    //append to dom


    li.appendChild(bookName) //add to the dom, grab li then append child to it which is book name
    li.appendChild(deleteBtn) //order matters here
    list.appendChild(li);

});


//Inside the dom only
let book = document.querySelector('li:first-child.name')

book.getAttribute('class');
//return "name"

//change attribute
book.setAttribute('class', 'name-2');

book.hasAttribute('class')//return true
book.hasAttribute('href') //return false

book.removeAttribute('class') //remove attribute


//hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if (hideBox.checked) { //return true if checked, false if unchecked
    list.style.display = 'none';
}else{
    list.style.display = 'initial';

}
});

//filter books
const searchBar = document.forms['search-books'].querySelector('#input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase() //input field grabbed, getting the value
    const books = list.getElementByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent; //title of the book

        if (title.toLowerCase().indexOf(term)!= -1) {//returns value of index
        book.style.display = 'block';
        }else{
            book.style.display = 'none';
        }

    })

});

//tabbed content
const tabs = document.querySelector('tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener(function(e){
    if (e.target.targetName = 'LI') {
        const targetPanel = document.querySelector(e.target.dataset); //data set looks for data attributes
        panels.forEach(function(panel)) {
            if (panel == targetPanel) {
                panel.classList.add('active');
            }else{
                panel.classList.remove('active'); //grab reference to Ul's then panels
            }
        }
    }
});
    



});

