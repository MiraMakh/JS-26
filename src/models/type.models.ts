// ===========================
// ტიპების განსაზღვრა
// ===========================

// ავტორი
export interface Author {
    name: string;
    age: number;
    isAlive: boolean;
}

// წიგნის ფორმატები
/* export enum BookFormat {
    HARDCOVER,
    PAPERBACK,
    EBOOK
} */

export enum BookFormat {
  Hardcover = "HARDCOVER",
  Paperback = "PAPERBACK",
  Ebook = "EBOOK",
}

// წიგნი
export interface Book {
    id: number | string; // Type Alias
    title: string;
    pages: number;
    published: boolean;
    author: Author;
    genres: string[];
    format?: BookFormat | null;
    language: "Georgian" | "English" | "Russian"; // Literal type
}
