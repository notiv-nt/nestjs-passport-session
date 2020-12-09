import { Controller, Post, Redirect, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { LoginGuard } from './guards/login.guard';

@Controller('auth')
export class AuthController {
  @Post('/login')
  @UseGuards(LoginGuard)
  @Redirect('/') // TODO: remove for ajax
  login2(@Req() req: Request) {
    return req.user;
  }

  @Post('logout')
  @Redirect('/') // TODO: remove for ajax
  logout(@Req() req: Request) {
    req.logout();
    return true;
  }
}
