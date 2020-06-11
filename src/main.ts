import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// config import
import { AppConfigService } from './config/app/config.service';

(async () => {
  // build your app
  const app = await NestFactory.create(AppModule);

  // Get app config for cors settings and starting the app.
  const appConfig: AppConfigService = app.get('AppConfigService');

  // start server
  await app.listen(appConfig.port);
})();
