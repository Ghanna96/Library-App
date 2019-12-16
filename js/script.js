let myLibrary = [
    {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 295,
    read: "Yes"
}
];
const addBook= document.querySelector("#addBook");
const div= document.querySelector("#books");

addBook.addEventListener('click',addBookToLibrary);

document.querySelector('#spawn').addEventListener("click", function() {
	document.querySelector('.popUp').style.display = "flex";
});
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
    return
}

function render(){
    let section= document.createElement("section");
    section.innerHTML="";
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
    return
}
render();
                            
                                
                             

                             
                             
                             