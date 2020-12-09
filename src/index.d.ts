import { User } from './user/user.entity';

// Patch request's user interface
declare module 'express' {
  interface Request {
    user: User;
  }
}
