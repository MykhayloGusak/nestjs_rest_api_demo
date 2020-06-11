import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly User: Model<User>) {}

  async insertUser(
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ) {
    try {
      const newUser = new this.User({});
      const saved = await newUser.save();

      if (saved) return saved.id as string;
    } catch (err) {
      throw Error(err);
    }
  }
}
