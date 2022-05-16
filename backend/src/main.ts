import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('ASK ME')
    .setDescription('Está presente os EndPoints desenvolvidos para o projeto "ASK ME", a nível de estudos')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('askme', app, document);

  await app.listen(3000);
}

bootstrap();