import { books, authors } from "./constants/data.constants.js";
import { getBookSummary, addBook, formatToString } from "./utils/utils.js";
import { BookFormat } from "./models/type.models.js";
// --- არსებული წიგნების ჩვენება ---
console.log("არსებული წიგნები:");
books.forEach(book => {
    console.log(getBookSummary(book));
});
// --- ახალი წიგნის დამატება ---
const newBook = {
    id: 3,
    title: "Advanced TypeScript",
    pages: 500,
    published: true,
    author: authors[0],
    genres: ["Programming", "Advanced"],
    format: BookFormat.HARDCOVER,
    language: "English"
};
addBook(books, newBook);
console.log("\nახალი წიგნი დამატებულია!\n");
// --- ყველა წიგნის ჩვენება ---
books.forEach(book => {
    console.log(`${book.title} - ფორმატი: ${formatToString(book.format)}`);
});
