import { Book, BookFormat } from '../models/type.models.js';

// --- ფუნქციები წიგნებისათვის ---
// წიგნის მოკლე აღწერა
export function getBookSummary(book: Book): string {
  return `${book.title} (${book.pages} გვერდი) ავტორი: ${book.author.name}, გამოცემულია: ${book.published}`;
}

// წიგნის დამატება სიაში
export function addBook(books: Book[], newBook: Book): void {
  books.push(newBook); // void ტიპი
}

// წიგნის ფორმატის სახელის დაბრუნება
export function formatToString(format: BookFormat): string {
  switch (format) {
    case BookFormat.Hardcover:
      return 'Hardcover';
    case BookFormat.Ebook:
      return 'Paperback';
    case BookFormat.Paperback:
      return 'Ebook';
    default:
      return 'Unknown';
  }
}

// Never ტიპის მაგალითი - შეცდომის მოხდენა
export function throwError(message: string): never {
  throw new Error(message);
}
