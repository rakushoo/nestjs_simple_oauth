import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { FtAppService } from './app.service';
import { FtOauthGuard } from './guards/ft-oauth.guard';

@Controller('google')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req);
  }
}

@Controller('auth42')
export class FtAppController {
  constructor(private readonly appService: FtAppService) {}

  @Get()
  @UseGuards(FtOauthGuard)
  ftAuth() {
    return;
  }

  @Get('redirect')
  @UseGuards(FtOauthGuard)
  // @Redirect('/')
  ftAuthCallback(@Req() req) {
    return this.appService.ftLogin(req);
  }
}
