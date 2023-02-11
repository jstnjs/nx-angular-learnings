import { Module } from '@nestjs/common';
import { ArticlesModule } from '../articles/articles.module';
import { AuthModule } from '../auth/auth.module';

import { AppController } from './app.controller';

@Module({
  imports: [AuthModule, ArticlesModule],
  controllers: [AppController],
})
export class AppModule {}
