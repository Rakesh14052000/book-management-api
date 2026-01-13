import { Book } from "../models/book.model";
import { v4 as uuidv4 } from "uuid";

const books: Book[] = [];

export const getAllBooks = (): Book[] => {
  return books;
};

export const getBookById = (id: string): Book | undefined => {
  return books.find(book => book.id === id);
};

export const addBook = (data: Omit<Book, "id">): Book => {
  const book: Book = {
    id: uuidv4(),
    ...data
  };

  books.push(book);
  return book;
};

export const updateBook = (
  id: string,
  data: Partial<Book>
): Book | null => {
  const book = getBookById(id);
  if (!book) return null;

  Object.assign(book, data);
  return book;
};

export const deleteBook = (id: string): boolean => {
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return false;

  books.splice(index, 1);
  return true;
};
