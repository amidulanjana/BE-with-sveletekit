import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TrpcRouter } from './trpc/trpc.router';

async function importHandler() {
  return new Function(`return import('../../client/build/handler.js')`)();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const handler = (await importHandler()).handler;
  app.enableCors();
  const trpc = app.get(TrpcRouter);
  trpc.applyMiddleware(app);
  app.use(handler)
  await app.listen(3000);
}
bootstrap();
