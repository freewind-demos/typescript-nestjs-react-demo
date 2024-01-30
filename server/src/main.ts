import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import portfinder from 'portfinder';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '../..', 'public'));

  await app.listen(await portfinder.getPortPromise());
  console.log(`open ${await app.getUrl()}`)
}
bootstrap();
