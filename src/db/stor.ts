import StorInterface from 'src/interface/StorInterface';
import Book from 'src/Book';
import { v4 as uuidv4 } from 'uuid';

const stor: StorInterface = {
  books: [
    new Book(
      uuidv4(),
      'книга1',
      'описание книги 1',
      'Автор1',
      'неизвестно',
      'неизвестно',
      'книга1',
    ),
    new Book(
      uuidv4(),
      'книга2',
      'описание книги 2',
      'Автор2',
      'неизвестно',
      'неизвестно',
      'книга2',
    ),
  ],
};

export default stor;
