import { Injectable } from '@nestjs/common';
import { User } from '../user/user.entity';

@Injectable()
export class AuthService {
  async login(name: string, password: string): Promise<User | null> {
    // User.findOne({ where: { name } }) and so on...
    const user = { id: 1, name: 'joe', password: 'doe' };

    // Compare passwords
    if (name === user.name && password === user.password) {
      return user;
    }

    return null;
  }
}
