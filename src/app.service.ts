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

  create(book: Partial<Book>): Book {
      const newID = books[books.length-1].id + 1;

      const newbook: Book ={
        id: newID,
        author: book.author ?? '',
        title: book.title ?? '',
        publicationYear: book.publicationYear ?? 0,
      }
      books.push(newbook); 

      return newbook
    
  }

  update(bookID: number, updatedBookFields: Partial<Book>): Book | undefined {
    const currentBook = books.find((book) => book.id === bookID);
    const updatedBook = {
      id: bookID,
      author: updatedBookFields.author ?? currentBook.author,
      title: updatedBookFields.title ?? currentBook.title,
      publicationYear: updatedBookFields.publicationYear ?? currentBook.publicationYear,
    }
    books.map((book) => {
      if (book.id === bookID){
        return updatedBook;
      } else {
        return book;
      }
    });

    return updatedBook;
  }
}

