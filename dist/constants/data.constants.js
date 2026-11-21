import { BookFormat } from "../models/type.models.js";
// მაგალითი ავტორების
export const authors = [
    { name: "გიორგი ქავთარაძე", age: 45, isAlive: true },
    { name: "ანა ბაგრატიონი", age: 38, isAlive: true }
];
// წიგნების მონაცემები
export const books = [
    {
        id: 1,
        title: "TypeScript-ის სახელმძღვანელო",
        pages: 350,
        published: true,
        author: authors[0],
        genres: ["Programming", "Technology"],
        format: BookFormat.EBOOK,
        language: "Georgian"
    },
    {
        id: 2,
        title: "JavaScript ძირითადი სემინარი",
        pages: 280,
        published: false,
        author: authors[1],
        genres: ["Programming", "Education"],
        format: BookFormat.PAPERBACK,
        language: "English"
    }
];
