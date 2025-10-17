// Toggle Navbar
document.getElementById("menu-toggle").onclick = () => {
    document.getElementById("nav-container").classList.toggle("hidden");
}

// Book Class
class book {
    constructor(id, title, author, cover, rating, genre, summary, reviews) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.cover = cover;
        this.rating = rating;
        this.genre = genre;
        this.summary = summary;
        this.reviews = reviews;
    }

    preview() {
        const frame = document.createElement("li");
        frame.classList.add("book");

        const a = document.createElement("a");
        a.href = "book.html";
        a.append(this.createImage(), this.createTitle(), this.createAuthor());

        frame.append(a);

        return frame;
    }

    createImage() {
        const img = document.createElement("img");
        img.src = `./images/covers/${this.cover}`;
        return img;
    }

    createTitle() {
        const title = document.createElement("h4");
        title.innerHTML = this.title;
        return title;
    }

    createAuthor() {
        const author = document.createElement("h4");
        author.innerHTML = this.author;
        return author;
    }
}

// Get JSON book list
const getBooks = async () => {
    const url = "https://davidba2004.github.io/csce242/projects/part6/json/books.json";

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (e) {
        console.error(e);
    }
};

// Parse JSON for books
const makeBookList = async (size, sectionID,) => {
    const books = await getBooks();
    const section = document.getElementById(sectionID);
    if (!section) {
        return;
    }

    const list = document.createElement("ul");
    list.classList.add("books");

    books.slice(0, size).forEach(b => {
        const created = new book(b.id, b.title, b.author, b.cover, b.rating, b.genre, b.summary, b.reviews);
        const li = created.preview();
        console.log(li);
        list.append(li);
    });

    section.append(list);
}

makeBookList(15, "books-in-genre");
makeBookList(10, "recently-released");
makeBookList(10, "all-time");
makeBookList(12, "my-reads");
makeBookList(4, "featured-books");
