import BookInterface from './interface/BookInterface';
import { v4 as uuidv4 } from 'uuid';

class Book implements BookInterface {
  id: string;
  title: string;
  description: string;
  authors: string;
  favorite: string;
  fileCover: string;
  fileName: string;
  constructor(
    id = uuidv4(),
    title = '',
    description = '',
    authors = '',
    favorite = '',
    fileCover = '',
    fileName = '',
  ) {
    (this.id = id),
      (this.title = title),
      (this.description = description),
      (this.authors = authors),
      (this.favorite = favorite),
      (this.fileCover = fileCover),
      (this.fileName = fileName);
  }
}

export default Book;
