/* eslint-disable @typescript-eslint/unbound-method */
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let controller: AppController;
  let service: AppService;

  beforeEach(async () => {
    const mockAppService = {
      getHello: jest.fn().mockReturnValue('Aguante San Lorenzo🩵❤️!'),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: mockAppService,
        },
      ],
    }).compile();

    controller = module.get<AppController>(AppController);
    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getHello', () => {
    it('should return a greeting message', () => {
      const result = controller.getHello();
      expect(result).toBe('Aguante San Lorenzo🩵❤️!');
      expect(service.getHello).toHaveBeenCalled();
    });

    it('should call appService.getHello', () => {
      controller.getHello();
      expect(service.getHello).toHaveBeenCalledTimes(1);
    });
  });
});
