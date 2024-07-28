const myLibrary=[];

function Book(title,author,pages,read)
{
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}
function addBookToLibrary()
{
        let para=document.createElement("p");
        console.log(myLibrary);
        let obj=myLibrary[myLibrary.length-1];
        for(let key in obj)
        {
            let property=document.createElement("div");
            property.classList.add("items");
            const capitalizedKey =
                key.charAt(0).toUpperCase()
                + key.slice(1)
            if(capitalizedKey==="Read")
            {
                let status= (obj[key]===false) ? "No" : "Yes";
                property.textContent= `${capitalizedKey} : ${status}`;
            }
            else
                property.textContent= `${capitalizedKey} : ${obj[key]}`;
            
            para.appendChild(property);
        }
        bookDisplay.appendChild(para);

}


const bookDisplay=document.querySelector(".book-display");


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
    let read=document.getElementById("read").checked;
    console.log(title);
    console.log(author);
    console.log(pages);
    console.log(read);
    const book=new Book(title,author,pages,read);
    myLibrary.push(book);
    addBookToLibrary();
    // myLibrary.pop();
    form.close();
});