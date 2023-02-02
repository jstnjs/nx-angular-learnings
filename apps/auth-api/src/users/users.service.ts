import { User } from '@jv/shared/data-access/auth';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      email: 'john@example.com',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      email: 'maria@example.com',
      password: 'guess',
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }
}