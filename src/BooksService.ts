import { Injectable } from '@nestjs/common';
import Book from './Book';
import stor from './db/stor';
import { v4 as uuidv4 } from 'uuid';
import CreateBookDto from './dto/CreateBookDto';

@Injectable()
export class BooksService {
  private stor: Book[] = [];

  createBook(
    title: string,
    description: string,
    authors: string,
    favorite: string,
    fileCover: string,
    fileName: string,
  ): void {
    const book = new Book(
      uuidv4(),
      title,
      description,
      authors,
      favorite,
      fileCover,
      fileName,
    );
    stor.books.push(book);
  }

  getBooks(): Book[] {
    return stor.books;
  }

  getBookId(id: string): Book | null {
    const idx = stor.books.findIndex((el) => el.id === id);
    if (idx === -1) {
      return null;
    }
    return stor.books[idx];
  }

  update(id: string, data: CreateBookDto): void {
    const idx = stor.books.findIndex((el) => el.id === id);
    stor.books[idx] = {
      ...stor.books[idx],
      ...data,
    };
  }

  delete(id: string): void {
    const idx = stor.books.findIndex((el) => el.id === id);
    if (idx === -1) {
      return null;
    }
    stor.books.splice(idx, 1);
  }
}
