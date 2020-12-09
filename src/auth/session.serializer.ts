import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { User } from '../user/user.entity';

interface SessionUser {
  id: number;
}

@Injectable()
export class SessionSerializer extends PassportSerializer {
  // Write to the session
  serializeUser(user: User, done: (err: null, sessionUser: SessionUser) => void): void {
    done(null, { id: user.id });
  }

  // From the session to the request
  deserializeUser(payload: SessionUser, done: (err: Error | null, payload?: User | null) => void): void {
    const user = { id: 1, name: 'joe', password: 'doe' };
    done(null, user);

    // User.findOne({ where: { id: payload.id } })
    //   .then((user) => {
    //     if (!user) {
    //       return done(null, null);
    //     }

    //     done(null, user);
    //   })
    //   .catch(done);
  }
}
