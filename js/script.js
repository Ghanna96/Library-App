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
const books= document.querySelector("#books");
const popUp=document.querySelector('.popUp');
// window.addEventListener('load', () =>{ 
//     defaultRender();
//   });
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



//-----------------------------
// render();
const addEvent=()=>{
            document.querySelectorAll(".close").forEach((x)=>{
            x.addEventListener("click",(e)=>{
                let o=x.getAttribute('data-index');
                // document.querySelector(`.card[data-index="${o}"]`).remove();
                e.currentTarget.parentNode.remove();
                myLibrary.splice(o,1);
            })
        });
        };
function defaultRender(){
        let section= document.createElement("section");
        if(myLibrary.length==0){
            return
        }
        for(let i in myLibrary){
            section.innerHTML=`
                                <div class="close" data-index=${i}>+</div>
                                <ul>
                                <li>Title: ${myLibrary[i].title}</li>
                                <br>
                                <li>Author: ${myLibrary[i].author}</li>
                                <br>
                                <li>Pages: ${myLibrary[i].pages}</li>
                                <br>
                                <li>Read: ${myLibrary[i].read}</li>
                                </ul>  `;
            section.classList.add('card'); 
            books.appendChild(section);
        }
        addEvent();
};
defaultRender();
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
    renderLast();
}

const renderLast=()=>{
    let section= document.createElement("section");
    let index= myLibrary.length-1;
    section.innerHTML=`
                        <div class="close" data-index=${index}>+</div>
                        <ul>
                            <li>Title: ${myLibrary[index].title}</li>
                            <br>
                            <li>Author: ${myLibrary[index].author}</li>
                            <br>
                            <li>Pages: ${myLibrary[index].pages}</li>
                            <br>
                            <li>Read: ${myLibrary[index].read}</li>
                        </ul>`;
    section.classList.add('card');
    books.appendChild(section);
    addEvent();
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