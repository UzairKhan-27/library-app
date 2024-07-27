const myLibrary=[];

function Book(title,author,pages,finished)
{
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.finished=finished;
    // this.info=function(){
    //     return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.readStatus;
    // }
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

const book1= new Book("The Hobbit","Tolkien","768","Not Read");
const book2=new Book("Harry Potter","J.K Rowling","325","Read");
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book1);
myLibrary.push(book2);
console.log(myLibrary);

const bookDisplay=document.querySelector(".book-display");
addBookToLibrary();
