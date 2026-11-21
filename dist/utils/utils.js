import { BookFormat } from '../models/type.models.js';
// --- ფუნქციები წიგნებისათვის ---
// წიგნის მოკლე აღწერა
export function getBookSummary(book) {
    return `${book.title} (${book.pages} გვერდი) ავტორი: ${book.author.name}, გამოცემულია: ${book.published}`;
}
// წიგნის დამატება სიაში
export function addBook(books, newBook) {
    books.push(newBook); // void ტიპი
}
// წიგნის ფორმატის სახელის დაბრუნება
export function formatToString(format) {
    switch (format) {
        case BookFormat.HARDCOVER:
            return 'Hardcover';
        case BookFormat.PAPERBACK:
            return 'Paperback';
        case BookFormat.EBOOK:
            return 'Ebook';
        default:
            return 'Unknown';
    }
}
// Never ტიპის მაგალითი - შეცდომის მოხდენა
export function throwError(message) {
    throw new Error(message);
}
