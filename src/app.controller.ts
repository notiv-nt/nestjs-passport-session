import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthenticatedGuard } from './auth/guards/authenticated.guard';

@Controller()
export class AppController {
  @Get()
  index(@Req() req: Request): string {
    const user = req.user;

    return `
      <h2>${user ? `Hello ${user.name}` : 'Not authenticated'}</h2>

      <form action="/auth/login" method="POST">
        <fieldset>
          <legend>Login</legend>

          <input type="text" name="name" value="joe">
          <input type="password" name="password" value="doe">
          <button type="submit">Send</button>
        </fieldset>
      </form>

      ${
        user &&
        `<form action="/auth/logout" method="POST">
          <fieldset>
            <legend>Logout</legend>

            <button type="submit">Send</button>
          </fieldset>
        </form>`
      }

      <a href="/profile">Profile page (available only for authenticated users)</a>
    `;
  }

  @Get('profile')
  @UseGuards(AuthenticatedGuard)
  profile(@Req() req: Request) {
    const user = req.user;

    return `
      <p>req.user: ${user && JSON.stringify(user)}</p>
      <p>cookie: ${req.headers.cookie}</p>
    `;
  }
}
