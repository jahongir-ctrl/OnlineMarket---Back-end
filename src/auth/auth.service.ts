import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(email: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await this.prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      role: 'USER',  // <-- явно ставим роль USER
    },
  });
  return { message: 'User created', user };
}



  async login(email: string, password: string) {
  const user = await this.prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('User not found');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid password');

  const payload = { sub: user.id, email: user.email, role: user.role };
  const token = await this.jwtService.signAsync(payload);

  return { access_token: token };
}

}
