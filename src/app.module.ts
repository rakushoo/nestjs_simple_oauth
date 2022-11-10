import { Module } from '@nestjs/common';
import { AppController, FtAppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleStrategy } from './google.strategy';
import { FtAppService } from './app.service';
import { FtStrategy } from './ft.strategy';
import { SessionSerializer } from './session.serializer';

@Module({
  imports: [],
  controllers: [AppController, FtAppController],
  providers: [AppService, GoogleStrategy, FtStrategy, FtAppService, SessionSerializer],
})
export class AppModule {}
