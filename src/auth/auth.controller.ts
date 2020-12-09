import { BadRequestException, Body, Controller, Post, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';

interface LoginDto {
  name: string;
  password: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @Redirect('/') // TODO: remove for ajax
  async login(@Req() req: Request, @Body() { name, password }: LoginDto) {
    const user = await this.authService.login(name, password);

    if (!user) {
      // Wrong credentials
      throw new BadRequestException();
    }

    await new Promise((resolve, reject) => {
      req.login(user, (err) => {
        if (err) {
          return reject(err);
        }

        resolve(1);
      });
    });

    return true;
  }

  @Post('logout')
  @Redirect('/') // TODO: remove for ajax
  logout(@Req() req: Request) {
    req.logout();
    return true;
  }
}
