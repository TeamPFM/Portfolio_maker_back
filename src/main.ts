import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';
import { winstonLogger } from './common/utils/logger.winston';
import { AllExceptionFiller } from './common/exception/exception.fillter';
import helmet from 'helmet';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: winstonLogger,
  });
  app.useStaticAssets(path.join(__dirname, '../', 'uploads'), {
    prefix: '/img',
  });
  app.use(helmet());
  app.enableCors({
    origin: true,
    credentials: true,
  });
  app.useGlobalFilters(new AllExceptionFiller(winstonLogger));
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(5000);
}
bootstrap();
