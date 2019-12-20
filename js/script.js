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
    }
});
//pop up form
addBook.addEventListener('click',()=>{
    addBookToLibrary();
    popUp.style.display = "none";
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
    })

    y.addEventListener("click",()=>{
        handleReading(y,book);
        
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
}

const handleReading=(button,book)=>{
    button.value=book.changeStatus();
    
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
    this.read=read
    this.changeStatus=()=>{
        this.read= (this.read==="Read")? "Not read": "Read";
        return this.read;
    }
    this.info= ()=>{
        return this.title+" by "+this.author+", "+this.pages+" pages, "+this.read+"."
    }
}
//render book in HTML
const render=(i)=>{ 
    let section= document.createElement("section");
    section.innerHTML=` 
    <ul data-index=${i}>
    <div class="close">+</div>
    <li>Title: ${myLibrary[i].title}</li>
    <br>
    <li>Author: ${myLibrary[i].author}</li>
    <br>
    <li>Pages: ${myLibrary[i].pages}</li>
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
    myLibrary.push(new book(title,author,pages,read));
    updateLib();
    render(myLibrary.length-1);
}
