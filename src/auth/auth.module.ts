import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './session.serializer';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CustomStrategy } from './custom.strategy';

@Module({
  imports: [PassportModule],
  providers: [SessionSerializer, CustomStrategy, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
