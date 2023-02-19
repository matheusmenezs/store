import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true, //o nest vai ignorar as propriedades que forem passadas que não está no dto.
      forbidNonWhitelisted: true, //lançar dado no json que não esta no dto.
    }),
  );

  useContainer(app.select(AppModule), { fallbackOnErrors: true }); //class validator resolverá as dependências assim como o nest resolve.
  await app.listen(3000);
}
bootstrap();
