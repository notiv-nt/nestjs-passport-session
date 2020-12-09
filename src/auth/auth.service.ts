import { Injectable } from '@nestjs/common';
import { User } from '../user/user.entity';

export interface InputCredentials {
  name: string;
  password: string;
}

@Injectable()
export class AuthService {
  async validateUser({ name, password }: InputCredentials): Promise<User | null> {
    // User.findOne({ where: { name } }) and so on...
    const user = { id: 1, name: 'joe', password: 'doe' };

    // Compare passwords
    if (name === user.name && password === user.password) {
      return user;
    }

    return null;
  }
}
