import { Injectable } from '@nestjs/common';
import { Book, books } from './FakeDatabase';

@Injectable()
export class BookService {
  getAllBooking(): Book[] {
    return books;
  }

  findById(bookID: number): Book | undefined {
    return books.find((book) => book.id === bookID);
  }
}

