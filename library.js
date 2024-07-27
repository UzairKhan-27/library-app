const myLibrary=[];

function Book(title,author,pages,finished)
{
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.finished=finished;
}
function addBookToLibrary()
{
    myLibrary.forEach(obj => {
        let para=document.createElement("p");
        for(let key in obj)
        {
            let property=document.createElement("div");
            property.classList.add("items");
            const capitalizedKey =
                key.charAt(0).toUpperCase()
                + key.slice(1)
            property.textContent= `${capitalizedKey} : ${obj[key]}`;
            para.appendChild(property);
        }
        bookDisplay.appendChild(para);
    });
}
// function addBookToLibrary()
const book1= new Book("The Stormlight Archive: Way of the kings","Tolkien","768","Yes");
const book2=new Book("Harry Potter","J.K Rowling","325","No");
myLibrary.push(book1);
myLibrary.push(book2);

const bookDisplay=document.querySelector(".book-display");
// addBookToLibrary();
// function fillForm()
// {
//     let title=prompt("Title: ");
//     let author=prompt("Author: ");
//     let pages=prompt("Pages: ");
//     let finished=prompt("Have You Read The Book Or Not?");
//     const book=new Book(title,author,pages,finished);
//     myLibrary.push(book);
//     addBookToLibrary();
// }

const addBook=document.querySelector(".add-book button");
const submitButton=document.querySelector("#submit");
const form=document.querySelector("dialog");

addBook.addEventListener("click",event =>{
    form.showModal();
});
submitButton.addEventListener("click",event => {
    let title=document.getElementById("title").value;
    let pages=document.getElementById("pages").value;
    let author=document.getElementById("author").value;
    let read=document.getElementById("read").value
    console.log(title);
    console.log(author);
    console.log(pages);
    console.log(read);
    form.close();
});