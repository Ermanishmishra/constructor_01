function Auther(name,birthYear,namtionality){
    this.name = name;
    this.birthYear = birthYear;
    this.namtionality = namtionality;
}

function Book(title,Auther,genre,price){
    this.title = title;
    this.Auther = Auther;
    this.genre = genre;
    this.price = price;
}

Book.prototype.getBookInfo = function(){
    console.log("title:",this.title);
    console.log("Auther:",this.Auther.name);
    console.log("genre:",this.genre);
    console.log("price:",this.price);
}


const Auther1 = new Auther("J.K. Rowling",1965,"British")

const Book1 = new Book('Harry Potter and the Sorcerer\'s Stone',Auther1,"Fantasy",20.50)

const Auther2 = new Auther('Jane Austen', 1775, 'English');
const book2 = new Book('Pride and Prejudice', Auther2, 'Classic', 12.99);

Book1.getBookInfo();
book2.getBookInfo();