
let myLibrary = store();
const addBook= document.querySelector("#addBook");
const books= document.querySelector("#books");
const popUp=document.querySelector('.popUp');

// myLibrary.push(new book("The Hobbit","J.R.R. Tolkien",295,"Read"));
//-----------------------------
//      EVENT LISTENERS       |
//-----------------------------

//render at start
//pop up form
addBook.addEventListener('click',()=>{
    addBookToLibrary();
});
document.querySelector('#spawn').addEventListener("click", function() {
    popUp.style.display = "flex";
});
document.querySelector('#closeForm').addEventListener("click", function() {
    popUp.style.display = "none";
});

//adds event that delete a book from library when pressing x
window.onload= startPage();


//-----------------------------
//     FUNCTION SECTION       |
//-----------------------------
function addEvent(currentElement,book){
    let x=currentElement.querySelector(".close");
    let y=currentElement.querySelector('#read');
    
    x.addEventListener("click",()=>{
        handleClose(x);
        return
    })
    
    y.addEventListener("click",()=>{
        handleReading(y,book);
        return
    })
};
//render book in HTML
function render(i){ 
    let section= document.createElement("section");
    section.innerHTML=` 
    <ul data-index=${i}>
        <div class="close">+</div>
        <li class="title">${myLibrary[i].title}</li>
        <br>
        <li style="font-size:19px">${myLibrary[i].author}</li>
        <br>
        Pages:<li> ${myLibrary[i].pages}</li>
        <br>
        <li><input type="button" id="read" value="${myLibrary[i].read}"></li>
    </ul>
    `;
    changeBackground(myLibrary[i].read,section.querySelector('#read'));
    section.classList.add('card');
    books.appendChild(section);
    let node=document.querySelector(`[data-index="${i}"]`).parentElement;
    addEvent(node,myLibrary[i]);
};

function handleReading(button,book){
    book.read= (book.read==="Read")? "Not read": "Read";
    button.value=book.read;
    changeBackground(button.value,button)
    return
};
function changeBackground(r,button){
    if(r=="Read"){
        button.style.backgroundColor = '#47d694';
    }else if(r=="Not read"){
        button.style.backgroundColor = '#b32727'; 
    }
}
function handleClose(x){
    let o=x.parentNode.getAttribute('data-index');
    x.parentNode.parentNode.remove();
    myLibrary.splice(o,1);
    updateLib();
};
//constructor
function book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info= ()=>{
        return this.title+" by "+this.author+", "+this.pages+" pages, "+this.read+"."
    }
};


//read the name...
function addBookToLibrary () {
    let title=document.querySelector("#title").value,
    author=document.querySelector("#author").value,
    pages=document.querySelector("#pages").value,
    read=document.querySelector('input[name="read"]:checked').value;
    if(title== "" || author== "" || pages== ""){
        alert ("please fill all the fields");
    }else{
        myLibrary.push(new book(title,author,pages,read));
        updateLib();
        render(myLibrary.length-1);
        popUp.style.display = "none";
    }
}

function startPage(){
    if(myLibrary!==null){ 
        for(let i in myLibrary){
            render(i);
        }
        return
    }
}
function updateLib(){
    localStorage.setItem('library', JSON.stringify(myLibrary));
    return
}
function store(){
    let libStore=JSON.parse(localStorage.getItem('library'));
    return (libStore===null)? [] : libStore
}