"use strict";
const myLibrary = [
    {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 295,
    read: "Yes"
}
];
const addBook= document.querySelector("#addBook");
const div= document.querySelector("#books");
const popUp=document.querySelector('.popUp');
window.addEventListener('load', () =>{ 
    defaultRender();
  });
addBook.addEventListener('click',()=>{
    addBookToLibrary();
    popUp.style.display = "none";
});

document.querySelector('#spawn').addEventListener("click", function() {
	popUp.style.display = "flex";
});
document.querySelector('.close').addEventListener("click", function() {
	popUp.style.display = "none";
});

//-----------------------------
// render();
function book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read
    this.info= ()=>{
     return this.title+" by "+this.author+", "+this.pages+" pages, "+this.read+"."
    }
}

function addBookToLibrary() {
    let title=document.querySelector("#title").value,
        author=document.querySelector("#author").value,
        pages=document.querySelector("#pages").value,
        read=document.querySelector('input[name="read"]:checked').value;
    myLibrary.push(new book(title,author,pages,read));
    render();
}

function defaultRender(){
    let section= document.createElement("section");
    for(let i in myLibrary){
        section.innerHTML=`<ul>
                            <li>Title: ${myLibrary[i].title}</li>
                            <br>
                            <li>Author: ${myLibrary[i].author}</li>
                            <br>
                            <li>Pages: ${myLibrary[i].pages}</li>
                            <br>
                            <li>Read: ${myLibrary[i].read}</li>
                            </ul>  `;
        section.classList.add('card'); 
        div.appendChild(section);
    }
}
const render=()=>{
    let section= document.createElement("section");
    let index= myLibrary.length-1;
    section.innerHTML=      `<ul>
                            <li>Title: ${myLibrary[index].title}</li>
                            <br>
                            <li>Author: ${myLibrary[index].author}</li>
                            <br>
                            <li>Pages: ${myLibrary[index].pages}</li>
                            <br>
                            <li>Read: ${myLibrary[index].read}</li>
                            </ul>  `;
    section.classList.add('card');
    div.appendChild(section);
    return
};
/* <ul>
                            <li>Title: ${myLibrary[index].title}</li>
                            <br>
                            <li>Author: ${myLibrary[index].author}</li>
                            <br>
                            <li>Pages: ${myLibrary[index].pages}</li>
                            <br>
                            <li>Read: ${myLibrary[index].read}</li>
                            </ul>  `; */