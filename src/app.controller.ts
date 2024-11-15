import { Controller, Get, Param } from '@nestjs/common';
import { BookService } from './app.service';
import { Book } from './FakeDatabase';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getAllBookings(): Book[] {

    return this.bookService.getAllBooking();
  }

  @Get('getById:id')
  getBookById(@Param('id') id: string): Book | undefined {
    const bookID = +id;
    return this.bookService.findById(bookID); 
  }
} 
