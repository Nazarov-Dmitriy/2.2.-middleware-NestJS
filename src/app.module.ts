import { Module } from '@nestjs/common';
import { BooksService } from './BooksService';
import { BooksController } from './BooksController';

@Module({
  imports: [],
  controllers: [BooksController],
  providers: [BooksService],
})
export class AppModule {}
