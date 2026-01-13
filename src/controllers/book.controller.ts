import { Request, Response } from "express";
import * as service from "../services/book.service";
import { parseCSV } from "../utils/csvParser";
import { AppError } from "../utils/AppError";

export const getBooks = (req: Request, res: Response) => {
  const books = service.getAllBooks();

  // if (!books || books.length === 0) {
  //   throw new AppError("No books found", 404);
  // }

  res.status(200).json({
    total: books.length,
    data: books
  });
};

export const getBookById = (req: Request<{ id: string }>, res: Response) => {
  try {
    const book = service.getBookById(req.params.id);

    if (!book) {
      throw new AppError("Book not found", 404);
    }

    return res.status(200).json({
      data: book
    });

  } catch (error) {
    throw new AppError(`Failed to retrieve book with id: ${req.params.id}`, 500);
  }
};

export const createBook = (req: Request, res: Response) => {
  const { title, author, publishedYear } = req.body;

  try {
    if (!title || !author || !publishedYear) {
      throw new AppError("title, author and publishedYear are required", 400);
    }

    const book = service.addBook({
      title,
      author,
      publishedYear: Number(publishedYear)
    });

    return res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: book
    });

  } catch (error) {
    throw new AppError("Failed to create books", 500);
  }
};

export const updateBook = (req: Request<{ id: string }>, res: Response) => {
  const book = service.updateBook(req.params.id, req.body);

  try {

    if (!book) {
      throw new AppError("Book not found", 404);
    }

    return res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: book
    });

  } catch (error) {
    throw new AppError(`Failed to update book with id: ${req.params.id}`, 500);
  }
};

export const deleteBook = (req: Request<{ id: string }>, res: Response) => {
  const success = service.deleteBook(req.params.id);

  try {

    if (!success) {
      throw new AppError("Book not found", 404);
    }

    return res.status(200).json({
      success: true,
      message: "Book deleted successfully"
    });

  } catch (error) {
    throw new AppError(`Failed to delete book with id: ${req.params.id}`, 500);
  }
};

export const importBooks = (req: Request, res: Response) => {
  const csv = req.file?.buffer.toString();
  if (!csv) {
    throw new AppError("CSV file required", 404);

  }

  const result = parseCSV(csv);

  return res.json({
    message: "All data added sucessfully",
    added: result.added,
    errors: result.errors
  });

  res.json(result);
};
