import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );
  // ValidationPipe's whitelist can automatically remove the properties which are not in DTO when create (POST) the entity.
  // ValidationPipe also gives us the option to STOP a request from being processed if any non-white listed properties are present throwing an error instead.
  await app.listen(3000);
}
bootstrap();
