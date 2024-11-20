import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './app.service';
import { Book } from './FakeDatabase';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getAllBookings(): Book[] {

    return this.bookService.getAllBooking();
  }

  @Get('getById/:id')
  getBookById(@Param('id') id: string): Book | undefined {
    const bookID = +id;
    return this.bookService.findById(bookID); 
  }

  @Post()
  addBook(@Body() book: Partial<Book>): Book | undefined{
    const  bookData = book;

    if (!book.author || !book.title || !book.publicationYear) return undefined;


    return this.bookService.create(bookData)

  }

  @Put(':id')
  updateBook(@Param('id') id: string,@Body() book: Partial<Book>,): Book | undefined{
     return this.bookService.update(+id, book);
  }
} 
