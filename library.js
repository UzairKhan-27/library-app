const myLibrary=[];

function Book(title,author,pages,readStatus)
{
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.readStatus=readStatus;
    this.info=function(){
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.readStatus;
    }
}

function addBookToLibrary()
{

}

const book1= new Book("The Hobbit","Tolkien","768","Not Read");
const book2=new Book("Harry Potter","J.K Rowling","325,Read");
myLibrary.push(book1);
myLibrary.push(book2);

console.log(myLibrary);
