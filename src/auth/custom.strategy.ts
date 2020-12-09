import { Strategy } from 'passport-custom';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Injectable()
export class CustomStrategy extends PassportStrategy(Strategy, 'custom') {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(req: Request) {
    const user = await this.authService.validateUser(req.body);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
