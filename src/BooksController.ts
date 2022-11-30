import {
  Controller,
  Get,
  Render,
  Post,
  Body,
  Redirect,
  Param,
} from '@nestjs/common';
import { BooksService } from './BooksService';
import CreateBookDto from './dto/CreateBookDto';
import Book from './Book';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  @Render('books/index')
  getBooks() {
    const books: Book[] = this.booksService.getBooks();
    return {
      title: 'Книги',
      books: books,
    };
  }

  @Get('/create')
  @Render('books/create')
  root() {
    return {
      title: 'Создать книгу',
      book: {},
    };
  }

  @Post('/create')
  @Redirect('/books')
  createBook(@Body() CreateBookDto: CreateBookDto) {
    const { title, description, authors, favorite, fileCover, fileName } =
      CreateBookDto;

    this.booksService.createBook(
      title,
      description,
      authors,
      favorite,
      fileCover,
      fileName,
    );
  }

  @Get(':id')
  @Render('books/view')
  getBookId(@Param('id') id: string) {
    const book = this.booksService.getBookId(id);

    if (book === null) {
      Redirect('/404');
    }
    return {
      title: 'Книга ',
      book: book,
    };
  }

  @Get('/update/:id')
  @Render('books/update')
  updateForm(@Param('id') id: string) {
    const book = this.booksService.getBookId(id);
    if (book === null) {
      Redirect('/404');
    }
    return {
      title: 'Редактировать книгу',
      book: book,
    };
  }

  @Post('/update/:id')
  @Redirect('/books')
  update(@Param('id') id: string, @Body() CreateBookDto: CreateBookDto) {
    const book = this.booksService.update(id, CreateBookDto);
    if (book === null) {
      Redirect('/404');
    }
  }

  @Post('/remove/:id')
  @Redirect('/books')
  delete(@Param('id') id: string) {
    const book = this.booksService.delete(id);
    if (book === null) {
      Redirect('/404');
    }
  }
}
