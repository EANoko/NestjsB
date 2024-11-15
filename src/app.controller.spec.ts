import { Test, TestingModule } from '@nestjs/testing';
import { BookingsController } from './app.controller';
import { BookService } from './app.service';

describe('BookingsController', () => {
  let appController:BookingsController ;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BookingsController],
      providers: [BookService],
    }).compile();

    appController = app.get<BookingsController>(BookingsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getAllBookings()).toBe('Hello World!');
    });
  });
});
