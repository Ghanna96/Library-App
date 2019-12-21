"use strict";

let myLibrary = store();
const addBook= document.querySelector("#addBook");
const books= document.querySelector("#books");
const popUp=document.querySelector('.popUp');

//-----------------------------
//      EVENT LISTENERS       |
//-----------------------------

//render at start
window.addEventListener('load', () =>{ 
    if(myLibrary!==null){ 
        for(let i in myLibrary){
            render(i);
        }
        return
    }
});
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
const addEvent=(currentElement,book)=>{
    let x=currentElement.querySelector(".close");
    let y=currentElement.querySelector('[value="Read"],[value="Not read"]');

    x.addEventListener("click",()=>{
        handleClose(x);
        return
    })

    y.addEventListener("click",()=>{
        handleReading(y,book);
        return
    })
};
// myLibrary.push(new book("The Hobbit","J.R.R. Tolkien",295,"Read"));
//-----------------------------
//     FUNCTION SECTION       |
//-----------------------------
function store(){
    let libStore=JSON.parse(localStorage.getItem('library'));
    return (libStore===null)? [] : libStore
}

const updateLib=()=>{
    localStorage.setItem('library', JSON.stringify(myLibrary));
    return
}

const handleReading=(button,book)=>{
    book.read= (book.read==="Read")? "Not read": "Read";
    button.value=book.read;
    return
};

const handleClose=(x)=>{
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

//render book in HTML
const render=(i)=>{ 
    let section= document.createElement("section");
    section.innerHTML=` 
    <ul data-index=${i}>
    <div class="close">+</div>
    <li>${myLibrary[i].title}</li>
    <br>
    <li>${myLibrary[i].author}</li>
    <br>
    Pages:<li> ${myLibrary[i].pages}</li>
    <br>
    <li><input type="button" value="${myLibrary[i].read}"></button></li>
    </ul>
     `;
     section.classList.add('card');
     section.classList.add('card'); 
     section.classList.add('card');
     books.appendChild(section);
     let node=document.querySelector(`[data-index="${i}"]`).parentElement;
    addEvent(node,myLibrary[i]);
};

//read the name...
const addBookToLibrary=()=> {
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
