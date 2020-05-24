document.addEventListener('DOMContentLoaded', function(){

const list = document.querySelector('#book-list ul');
const forms = document.forms;

//delete books
list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li); //removes listed items after delete click
}
});

//add book list
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
    e.preventDefault();
        
    const value = addForm.querySelector('input[type="text"]').value; //specific type in brackets //grab value of input field
      //create elements

      const li = document.createElement('li');
      const bookName = document.createElement('span');
      const deleteBtn = document.createElement('span');
  

    //add content
    bookName.textContent = value;
    deleteBtn.textContent = 'delete';
    

    //add classes
    bookName.classList.add('name'); //add class of name
    deleteBtn.classList.add('delete'); //add class of delete
    
    //append to dom


    li.appendChild(bookName) //add to the dom, grab li then append child to it which is book name
    li.appendChild(deleteBtn) //order matters here
    list.appendChild(li);

});


//hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

//filter books
const searchBar = forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach((book) => {
    const title = book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(e.target.value) != -1){
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
});

//tabbed content
const tabs = document.querySelector('.tabs');
  const panels = document.querySelectorAll('.panel');
  tabs.addEventListener('click', (e) => {
    if(e.target.tagName == 'LI'){
      const targetPanel = document.querySelector(e.target.dataset.target);
      Array.from(panels).forEach((panel) => {
        if(panel == targetPanel){
          panel.classList.add('active');
        }else{
          panel.classList.remove('active');
        }
      });
    }
  });

})
