import { Module } from '@nestjs/common';
import { BookingsController } from './app.controller';
import { BookService } from './app.service';

@Module({
  imports: [],
  controllers: [BookingsController],
  providers: [BookService],
})
export class AppModule {}
