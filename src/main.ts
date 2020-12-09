import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import passport from 'passport';
import session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      resave: false,
      saveUninitialized: false,
      secret: 's_e_c_r_e_t',
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000);

  console.log('http://localhost:3000');
}

bootstrap();
