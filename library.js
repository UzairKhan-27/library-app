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
                let readCheckbox=document.createElement("input");
                readCheckbox.setAttribute("type","checkbox");
                readCheckbox.checked=(obj[key]===false) ? false:true;
                console.log(readCheckbox.value);
                property.textContent= `${capitalizedKey} `;
                property.appendChild(readCheckbox);
                readCheckbox.addEventListener("click",event=>{
                    obj["read"]=!obj["read"];
                    console.log(myLibrary);
                });
            }
            else
                property.textContent= `${capitalizedKey} : ${obj[key]}`;
            
            para.appendChild(property);
        }
        const deleteButton=document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.setAttribute("id",myLibrary.length-1);
        deleteButton.textContent="Delete";
        para.appendChild(deleteButton);
        bookDisplay.appendChild(para);

        deleteButton.addEventListener("click",event=>
        {
            myLibrary.splice(event.target.id,1);
            para.remove();
        });

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
    form.close();
});