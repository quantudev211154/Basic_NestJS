import { AuthGuard } from '@nestjs/passport';

export class JwtGuard extends AuthGuard('jwtHihi') {
  constructor() {
    super();
  }
}
